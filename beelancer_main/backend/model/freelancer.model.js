const mongoose = require('mongoose')

const freelancerSchema = new mongoose.Schema({}, { timestamp: true })

module.exports = mongoose.model('Freelancer', freelancerSchema)
