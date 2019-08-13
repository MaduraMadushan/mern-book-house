const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    auther: {
      type: String,
      required: true
    },
    lend: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    contactNumber: {
      type: String
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  { timestamps: true }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
