const mongoose = require('mongoose')

const freelancerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
    },
    avatar: {},
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
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
  { timestamp: true }
)

module.exports = mongoose.model('Freelancer', freelancerSchema)
