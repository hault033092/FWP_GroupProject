const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema(
  {
    freelancer: {
      type: mongoose.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Rating', ratingSchema)
