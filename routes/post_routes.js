const express = require('express')
const router = express.Router()
const post = require('../controllers/post')


router.get('/', post.getALLPosts)

router.post('/', post.createNewPost)

router.get('/:id', post.getPostById)



module.exports = router