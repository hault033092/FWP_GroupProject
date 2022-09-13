const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({}, { timestamp: true })

module.exports = mongoose.model('Client', clientSchema)
