const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    autherFirstName: {
      type: String,
      required: true
    },
    autherLastName: {
      type: String,
      required: true
    },
    lend: {
      type: Boolean,
      default: false
    },
    landFirstName: {
      type: String
    },
    landLastName: {
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
