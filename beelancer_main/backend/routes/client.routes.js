const router = require('express').Router()
const User = require('../model/user.model')
const JobPost = require('../model/jobPost.model')
const verify = require('../helper/verifyToken')
const { registerValidation, loginValidation } = require('../helper/validation')

// Get all client
router.get('/getClients', verify, async (req, res) => {
  try {
    const foundClient = await Client.find()
    res.json({ client: foundClient })
  } catch (err) {
    res.json({ message: err })
  }
})

// Get client by id
router.get('/getClient/:userId', verify, async (req, res) => {
  try {
    const foundClient = await User.findOne({
      _id: req.params.userId,
    }).lean()
    if (foundClient.role == 'CLIENT') {
      const jobPosts = await JobPost.find({
        userId: foundClient._id,
      }).lean()

      res.json({
        id: foundClient._id,
        name: foundClient.name,
        phone: foundClient.phone,
        role: foundClient.role,
        jobPosts: jobPosts,
      })
    } else {
      res.json({
        id: foundClient._id,
      })
    }
  } catch (error) {
    res.json({ message: error })
  }
})

// Create client
router.post('/createClient', verify, async (req, res) => {
  const newClient = new Client({
    user: req.user._id,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  })

  //
  try {
    await newClient.save()
    res.json({ client: newClient._id })
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete client
router.delete('/deleteClient/:freelancerId', verify, async (req, res) => {
  try {
    await Client.deleteOne({
      _id: req.params.clientdId,
    })
    res.send('Client removed!')
  } catch (error) {
    res.json({ message: error })
  }
})

// Update client
router.patch('/updateClient/:clientdId', verify, async (req, res) => {
  try {
    //console.log("check here")
    await Client.updateOne(
      {
        _id: req.params.clientdId,
      },
      {
        $set: {
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
        },
      }
    )
    res.send('Client Updated!')
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
