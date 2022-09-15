const router = require('express').Router()
const Rating = require('../model/rating.model')
const verify = require('../helper/verifyToken')
const { registerValidation, loginValidation } = require('../helper/validation')

// Get all post
router.get('/getRatings', verify, async (req, res) => {
  try {
    const foundRating = await Rating.find()
    res.json({ rating: foundRating })
  } catch (err) {
    res.json({ message: err })
  }
})

// Get post by id
router.get('/getRating/:ratingId', verify, async (req, res) => {
  try {
    const foundRating = await Rating.findOne({
      _id: req.params.ratingId,
    })
    res.json({ rating: foundRating })
  } catch (error) {
    res.json({ message: error })
  }
})

// Create postW
router.post('/createRating', verify, async (req, res) => {
  const newRating = new Rating({
    user: req.user._id,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  })

  //
  try {
    await newRating.save()
    res.json({ rating: newRating._id })
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete post
router.delete('/deleteRating/:freelancerId', verify, async (req, res) => {
  try {
    await Rating.deleteOne({
      _id: req.params.ratingId,
    })
    res.send('Rating removed!')
  } catch (error) {
    res.json({ message: error })
  }
})

// Update post
router.patch('/updateRating/:ratingdId', verify, async (req, res) => {
  try {
    //console.log("check here")
    await Rating.updateOne(
      {
        _id: req.params.ratingdId,
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
    res.send('Rating Updated!')
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
