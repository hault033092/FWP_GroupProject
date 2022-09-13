const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({}, { timestamp: true })

module.exports = mongoose.model('Category', categorySchema)
