const mongoose = require('mongoose')

const jobPostSchema = new mongoose.Schema(
  {
    client: {
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
    jobCategory: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
    },
    budget: {
      type: Number,
      required: true,
    },
    isApplied: {
      type: Boolean,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('JobPost', jobPostSchema)
