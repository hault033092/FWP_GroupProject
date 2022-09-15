const router = require('express').Router()
const User = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../helper/validation')

// Create a user with validation
router.post('/signup', async (req, res) => {
  //Validate
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //Validate email
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send('Email exist!')

  //Validate password
  const passwordExist = await User.findOne({ password: req.body.password })
  if (passwordExist) return res.status(400).send('Password exist!')

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    phone: req.body.phone,
    role: req.body.role,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address,
    bio: req.body.bio,
    personalSkills: req.body.personalSkills,
  })

  try {
    await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

// User login
router.post('/signin', async (req, res) => {
  //
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  //
  const foundUser = await User.findOne({ email: req.body.email }).lean()
  if (!foundUser) return res.status(400).send('Incorrect email!')
  //
  const validPassword = await bcrypt.compare(
    req.body.password,
    foundUser.password
  )
  if (!validPassword) return res.status(400).send('Invalid password!')

  //Create token
  const token = jwt.sign(
    {
      _id: foundUser._id,
      role: foundUser.role,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '12h' }
  )
  foundUser.token = token
  res.status(200).json(foundUser)
})

// Get all users
router.get('/getUsers', async (req, res) => {
  try {
    const gotUsers = await User.find()
    res.json(gotUsers)
  } catch (error) {
    res.json({ message: error })
  }
})

// Get user by a specific ID
router.get('/getUser/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
})

// Delete specific users (all if necessary) by ID
router.delete('/:userId', async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId }) //Mongo generates id by this format
    res.json('User removed!')
  } catch (error) {
    res.json({ message: error })
  }
})

// Find user by ID and update said user's attributes
router.patch('/updateProfile/:userID', async (req, res) => {
  try {
    const userID = req.params.userID
    const updatedData = req.body
    const options = { new: true }
    const updatedUser = await User.findByIdAndUpdate(
      userID,
      updatedData,
      options
    )
    res.json(updatedUser)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
