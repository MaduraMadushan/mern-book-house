const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const Book = require('./../models/book')
const auth = require('./../middleware/auth')

router.post(
  '/',
  auth,
  [
    check('title', 'Title is required')
      .not()
      .isEmail(),
    check('auther', 'Auther is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() })
    }

    try {
      const book = new Book({ ...req.body, owner: req.user._id })
      await book.save()
      res.send({ book })
    } catch (e) {
      res.status(500).send(e)
    }
  }
)

router.get('/', auth, async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 100
  let skip = req.query.skip ? parseInt(req.query.skip) : 0

  try {
    const book = await Book.find({ owner: req.user._id })
      .sort({ updatedAt: -1 })
      .limit(limit)
      .skip(skip * limit)
      .exec()

    const count = await Book.countDocuments({})
    res.send({ count, page: skip, pageSize: book.length, book })
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/:id', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() })
  }

  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'auther', 'lend', 'name', 'contactNumber']

  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  )

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' })
  }

  try {
    const book = await Book.findOne({ _id, owner: req.user._id })
    if (!book) return res.status(404).send()
    updates.forEach(update => (book[update] = req.body[update]))
    await book.save()
    res.send(book)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id
  try {
    const book = await Book.findOneAndDelete({ _id, owner: req.user._id })
    if (!book) res.status(404).send()
    res.send(book)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router
