const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// Routes
const userRoute = require('./routes/user.routes')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/user', userRoute)

//Listen to port
app.listen(8081, () => console.log('Port listened!'))
//Connect to database
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Db connected!'))
