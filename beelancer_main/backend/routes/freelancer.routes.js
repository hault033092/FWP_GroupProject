const router = require('express').Router()
const Freelancer = require('../model/freelancer.model')
const verify = require('../helper/verifyToken')
const { registerValidation, loginValidation } = require('../helper/validation')
const multer = require('multer')
const fs = require('fs')
const { db } = require('../model/freelancer.model')
const upload = multer({dest:'uploads/'})
// const storage = multer.diskStorage({
//   destination: function(req,file,cb)
//   {
//     cb(null,'./uploads/');
//   },
//   filename: function(req,file,cb)
//   {
//     cb(null,new Date().toISOString() + file.originalname);
//   }
// })
// const upload = multer({storage: storage});
// Get all post
router.get('/getFreelancers', verify, async (req, res) => {
  try {
    const foundFreelancer = await Freelancer.find()
    res.json(foundFreelancer)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get post by id
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

// Create postW
router.post('/createFreelancer', verify, async (req, res) => {
  //   const { error } = postValidate(req.body)
  //   if (error) return res.status(400).send(error.details[0].message)
  
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

// Delete post
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

// Update post
router.patch('/updateFreelancer/:freelancerId',upload.single('avatar'), verify, async (req, res) => {
  console.log("avatar is")
  console.log(req.body.avatar)
  console.log(req.file)
  console.log("content:")
  console.log({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    email: req.body.email,
    address: req.body.address,
    bio: req.body.bio,
    personalSkills: req.body.personalSkills,
  })
  try {
    console.log("check here")
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
          //avatar: fs.readFileSync("uploads/"+ req.file.filename),
        },
      }
    )
    console.log("updated")
    res.send('Freelancer Updated!')
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
