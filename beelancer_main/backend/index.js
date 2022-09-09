const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Listen to port
app.listen(8080, () => console.log('Port listened!'))
//Connect to database
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Db connected!'))
