const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema(
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
    email: {
      type: String,
      required: true,
    },
    freelancerInProgress: {
      type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Client', clientSchema)
