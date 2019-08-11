const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    tokens: [
      {
        token: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
)

userSchema.methods.toJSON = function() {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Unable to login')
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error('Unable to login')
  return user
}

userSchema.methods.generateAuthToken = async function() {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

userSchema.pre('save', async function(naxt) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
