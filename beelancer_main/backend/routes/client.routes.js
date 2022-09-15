const router = require('express').Router()
const Client = require('../model/client.model')
const verify = require('../helper/verifyToken')
const { registerValidation, loginValidation } = require('../helper/validation')

// Get all post
router.get('/getClients', verify, async (req, res) => {
  try {
    const foundClient = await Client.find()
    res.json({ client: foundClient })
  } catch (err) {
    res.json({ message: err })
  }
})

// Get post by id
router.get('/getClient/:clientId', verify, async (req, res) => {
  try {
    const foundClient = await Client.findOne({
      _id: req.params.clientId,
    })
    res.json({ client: foundClient })
  } catch (error) {
    res.json({ message: error })
  }
})

// Create postW
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

// Delete post
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

// Update post
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
