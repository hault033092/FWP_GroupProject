const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Types.ObjectId,
    },

    title: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Rating', ratingSchema)
