const { boolean } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
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

    name: { type: String },

    phone: {
      type: String,
    },
    role: {
      type: String,
      default: 'CLIENT',
    },

    // Client
    isFreelancerInProgress: {
      type: Boolean,
      default: false,
    },

    jobPosts: [
      {
        type: mongoose.Types.ObjectId,
      },
    ],

    // Freelancer
    avatar: {
      type: Buffer,
    },

    rating: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Rating',
      },
    ],

    dateOfBirth: {
      type: String,
    },
    address: {
      type: String,
    },
    bio: {
      type: String,
    },
    personalSkills: {
      type: String,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
