import passport from 'passport'
import mongoose from 'mongoose'
// import { Strategy as GitHubStrategy } from 'passport-github'
import { Strategy as LocalStrategy } from 'passport-local'

const User = mongoose.model('User')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'login',
      passwordField: 'password',
    },
    function (login, password, done) {
      const query = {
        $or: [{ email: login }, { username: login }],
      }
      User.findOne(query)
        .then(function (user) {
          if (user && user.validPassword(password)) {
            return done(null, user)
          } else {
            return done(null, false, 'Usuário ou senha inválidos')
          }
        })
        .catch(done)
    }
  )
)

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       const user = { token: accessToken, ...profile._json }
//       // user.refreshToken = refreshToken
//       return cb(null, user)
//     }
//   )
// )

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})
