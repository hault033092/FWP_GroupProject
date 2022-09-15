const router = require('express').Router()
const Freelancer = require('../model/freelancer.model')
const verify = require('../helper/verifyToken')
const { registerValidation, loginValidation } = require('../helper/validation')
const multer = require('multer')
const fs = require('fs')
const { db } = require('../model/freelancer.model')
const upload = multer({ dest: 'uploads/' })

// Get all freelancers
router.get('/getFreelancers', verify, async (req, res) => {
  try {
    const foundFreelancer = await Freelancer.find()
    res.json(foundFreelancer)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get freelancer by id
router.get('/getFreelancer/:freelancerId', verify, async (req, res) => {
  try {
    const foundFreelancer = await Freelancer.findOne({
      _id: req.params.freelancerId,
    })
    res.json(foundFreelancer)
  } catch (error) {
    res.json({ message: error })
  }
})

// Create freelancer
router.post('/createFreelancer', verify, async (req, res) => {
  const newFreelancer = new Freelancer({
    user: req.user._id,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    email: req.body.email,
    address: req.body.address,
    bio: req.body.bio,
    personalSkills: req.body.personalSkills,
  })

  //
  try {
    await newFreelancer.save()
    res.send({ newFreelancer })
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete freelancer
router.delete('/deleteFreelancer/:freelancerId', verify, async (req, res) => {
  try {
    await Freelancer.deleteOne({
      _id: req.params.freelancerId,
    })
    res.send('Freelancer removed!')
  } catch (error) {
    res.json({ message: error })
  }
})
router.patch(
  '/updateFreelancerAvatar/:freelancerId',
  upload.single('avatar'),
  async (req, res) => {
    try {
      await Freelancer.updateOne(
        {
          _id: req.params.freelancerId,
        },
        {
          $set: {
            avatar: fs.readFileSync('uploads/' + req.file.filename),
          },
        }
      )
      //console.log("updated")
      res.send('Freelancer Updated!')
    } catch (error) {
      res.json({ message: error })
    }
  }
)
// Update freelancer
router.patch('/updateFreelancer/:freelancerId', verify, async (req, res) => {
  try {
    await Freelancer.updateOne(
      {
        _id: req.params.freelancerId,
      },
      {
        $set: {
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          dateOfBirth: req.body.dateOfBirth,
          email: req.body.email,
          address: req.body.address,
          bio: req.body.bio,
          personalSkills: req.body.personalSkills,
        },
      }
    )
    res.send('Freelancer Updated!')
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
