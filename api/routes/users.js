const mongoose = require('mongoose')
const router = require('express').Router()
const { authenticated, admin } = require('../config/auth')
const mailer = require('../mailer')
const User = mongoose.model('User')

router.get('/', admin, (req, res) => {
  const query = {}

  User.find(query).exec((err, users) => {
    if (err) {
      res.status(422).send(err.response.data)
    } else {
      res.json(users.map((user) => user.data()))
    }
  })
})

router.get('/:id', (req, res) => {
  const query = {
    $or: [
      { id: req.params.id },
      { email: req.params.id },
      { phone: req.params.id },
      { username: req.params.id },
    ],
  }
  User.findOne(query).then((user) => {
    if (user) {
      return res.send(user.data())
    } else {
      return res.status(422).send('Usuário não encontrado')
    }
  })
})

router.post('/register', (req, res, next) => {
  const user = new User()

  user.name = req.body.name
  user.username = req.body.username

  user.role = 'member'

  user.setPassword(req.body.password)

  user
    .save()
    .then(function () {
      return res.send(user.data())
    })
    .catch(next)
})

router.put('/profile', authenticated, (req, res, next) => {
  User.findById(req.user.id).then((user) => {
    user.email = req.body.email
    user.phone = req.body.phone
    user.username = req.body.username
    user.name = req.body.name
    user.picture = req.body.picture
    user.status = 'registered'
    user.code = generateCode(user)

    if (req.body.password) {
      user.setPassword(req.body.password)
    }

    user
      .save()
      .then(() => {
        return res.send(user.data())
      })
      .catch(next)
  })
})

router.get('/password_recovery/:login', (req, res) => {
  const query = {
    $or: [
      { username: req.params.login },
      { email: req.params.login },
      { phone: req.params.login },
    ],
  }
  User.findOne(query).exec(async (err, user) => {
    if (!err && user) {
      const code = Math.random().toString(36).substring(9).toUpperCase()
      user.setRecoveryCode(code)
      await user.save()
      let resp = null
      if (user.email) {
        const mailInfo = await mailer.send(
          user.email,
          'O código para recuperar sua senha é: ' + code,
          'Olá! Uma alteração de senha foi solicitada para a sua conta no Cultivar Brasil. O seu código para recuperar a senha é: ' +
            code
        )
        if (mailInfo && mailInfo.accepted && mailInfo.accepted.length)
          resp = { email: user.email }
      } else {
        res
          .status(422)
          .send(
            'Este usuário não possúi email cadastrado para recuperar a senha. Entre em contato pelo email: ' +
              process.env.SMTP_USER
          )
      }
      res.send(resp)
    } else {
      res.status(422).send('Usuário não encontrado')
    }
  })
})

router.post('/validate_recovery/:login', (req, res) => {
  const query = {
    $or: [
      { username: req.params.login },
      { email: req.params.login },
      { phone: req.params.login },
    ],
  }
  User.findOne(query).exec((err, user) => {
    if (!err && user && req.body.code) {
      res.send(user.validRecoveryCode(req.body.code.toUpperCase()))
    } else {
      res.status(422).send('Usuário não encontrado')
    }
  })
})

router.post('/set_password', authenticated, (req, res) => {
  if (!req.body.password) {
    return res.status(422).json('Senha inválida')
  }

  User.findById(req.user.id).exec((err, user) => {
    if (!err && user) {
      if (user.status === 'pending_password') {
        user.setPassword(req.body.password)
        user.status = 'pending_profile'
        user.save()
        res.send(user.data())
      }
    } else {
      res.status(422).send('Usuário não encontrado')
    }
  })
})

const generateCode = (user) => {
  const code = user.name || user.username || user.email
  if (code) {
    return code.substring(0, 2).toUpperCase()
  }
}
module.exports = router
