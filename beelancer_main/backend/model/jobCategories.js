const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },

    email: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },

    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6,
    },
  },
  { timestamp: true }
)

module.exports = mongoose.model('Category', categorySchema)
