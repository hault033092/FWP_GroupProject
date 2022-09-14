const router = require('express').Router()
const verify = require('../helper/verifyToken')
const JobPost = require('../model/jobPost.model')
// const { postValidate } = require('../helper/validation')

// Get all post
router.get('/getPosts', verify, async (req, res) => {
  try {
    const gotPosts = await JobPost.find()
    res.json(gotPosts)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get post by id
router.get('/getPostById/:postId', verify, async (req, res) => {
  try {
    const gotPost = await JobPost.findOne({ _id: req.params.postId })
    res.json(gotPost)
  } catch (error) {
    res.json({ message: error })
  }
})

// Create post
router.post('/createPost', verify, async (req, res) => {
  //   const { error } = postValidate(req.body)
  //   if (error) return res.status(400).send(error.details[0].message)

  const newPost = new JobPost({
    client: req.user._id,
    title: req.body.title,
    description: req.body.description,
    jobCategory: req.body.jobCategory,
    skills: req.body.skills,
    budget: req.body.budget,
    isApplied: req.body.isApplied,
  })
  //console.log("check post: "+newPost)
  //
  try {
    await newPost.save()
    res.send({ newPost })
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete post
router.delete('/deletePost/:postId', verify, async (req, res) => {
  try {
    await JobPost.deleteOne({
      _id: req.params.postId,
    })
    res.send('Post removed!')
  } catch (error) {
    res.json({ message: error })
  }
})

// Update post
router.patch('/updatePost/:postId', verify, async (req, res) => {
  try {
    await JobPost.updateOne(
      {
        _id: req.params.postId,
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          jobCategory: req.body.jobCategory,
          skills: req.body.skills,
          budget: req.body.budget,
          isApplied: req.body.isApplied,
        },
      }
    )
    res.send('Post Updated!')
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
