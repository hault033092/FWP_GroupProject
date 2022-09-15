const mongoose = require('mongoose')

const freelancerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
    },
    avatar: {
      type: Buffer,
    },
    name: {
      type: String,
      required: true,
    },
    selectedRating: {
      type: mongoose.Types.ObjectId,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    personalSkills: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Freelancer', freelancerSchema)
