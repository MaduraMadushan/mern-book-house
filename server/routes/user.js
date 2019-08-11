const express = require('express')
const router = express.Router()
const User = require('./../models/user')
const { check, validationResult } = require('express-validator')
const auth = require('./../middleware/auth')

router.post(
  '/',
  [
    check('firstname', 'First Name is required')
      .not()
      .isEmpty(),
    check('lastname', 'Last Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more character')
      .exists()
      .isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).send({ errors: errors.array() })

    try {
      const user = new User(req.body)
      await user.save()
      const token = await user.generateAuthToken()
      res.status(201).send({ token })
    } catch (e) {
      res.status(400).send(e)
    }
  }
)

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more character')
      .exists()
      .isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).send({ errors: errors.array() })

    try {
      const user = await User.findByCredentials(
        req.body.email,
        req.body.password
      )
      const token = await user.generateAuthToken()
      res.send({ token })
    } catch (e) {
      res.status(400).send(e)
    }
  }
)

router.post('/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (e) {
    res.send(500).send(e)
  }
})

router.get('/me', auth, async (req, res) => {
  res.send(req.user)
})

module.exports = router
