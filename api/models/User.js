const crypto = require('crypto')
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')

mongoose.set('useCreateIndex', true)

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: 'member',
    },
    email: {
      type: String,
      required() {
        return !this.username
      },
      index: {
        unique: true,
        partialFilterExpression: { email: { $type: 'string' } },
      },
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'inválido'],
    },
    username: {
      type: String,
      required() {
        return !this.email
      },
      index: {
        unique: true,
        partialFilterExpression: { username: { $type: 'string' } },
      },
      lowercase: true,
    },
    name: String,
    avatar: Object,
    region: String,
    phone: String,
    code: String,
    bio: String,
    hash: String,
    salt: String,
    recovery_hash: String,
    recovery_salt: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

UserSchema.plugin(uniqueValidator, {
  message: 'Este nome já está sendo usado',
})

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
}

UserSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
  return this.hash === hash
}

UserSchema.methods.setRecoveryCode = function (recoveryCode) {
  this.recovery_salt = crypto.randomBytes(16).toString('hex')
  this.recovery_hash = crypto
    .pbkdf2Sync(recoveryCode, this.recovery_salt, 10000, 512, 'sha512')
    .toString('hex')
}

UserSchema.methods.validRecoveryCode = function (recoveryCode) {
  const hash = crypto
    .pbkdf2Sync(recoveryCode, this.recovery_salt, 10000, 512, 'sha512')
    .toString('hex')
  return this.recovery_hash === hash
}

UserSchema.methods.data = function () {
  return {
    _id: this._id,
    id: this.id,
    email: this.email,
    phone: this.phone,
    username: this.username,
    name: this.name,
    code: this.code,
    avatar: this.avatar,
    region: this.region,
    bio: this.bio,
    role: this.role,
  }
}

UserSchema.methods.generateJWT = function () {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      ...this.data(),
      exp: parseInt(exp.getTime() / 1000),
    },
    process.env.SECRET || process.env.npm_package_name
  )
}

UserSchema.methods.toAuthJSON = function () {
  return {
    ...this.data(),
    token: this.generateJWT(),
  }
}

const User = mongoose.models.User || mongoose.model('User', UserSchema)
module.exports = User
