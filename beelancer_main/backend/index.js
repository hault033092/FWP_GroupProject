const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// Routes
const userRoute = require('./routes/user.routes')
const jobPostRoute = require('./routes/post.routes')
const freelancerRoute = require('./routes/freelancer.routes')
const clientRoute = require('./routes/client.routes')
const ratingRoute = require('./routes/rating.routes')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/user', userRoute)
app.use('/api/jobPost', jobPostRoute)
app.use('/api/freelancer', freelancerRoute)
app.use('/api/client', clientRoute)
app.use('/api/rating', ratingRoute)

//Listen to port
app.listen(8080, () => console.log('Port listened!'))
//Connect to database
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Db connected!'))
