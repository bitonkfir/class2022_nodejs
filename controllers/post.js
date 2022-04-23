const Post = require('../models/post_model')
const { post } = require('../routes/post_routes')

/**
 * gets all the posts
 * @param {http requests} req 
 * @param {http responses} res 
 */

const getALLPosts = async (req, res) => {
    console.log('Getallposts')
    try {
        const sender = req.query.sender
        var posts
        if (sender != null | sender != undefined) {
            posts = await Post.find({ 'sender': sender })
        } else {
            posts = await Post.find()
        }

        res.status(200).send(posts)

    } catch (err) {
        res.status(400).send({
            'status': 'fail',
            'message': err.message


        })
    }
}

/**
 * create new posts
 * @param {http requests} req 
 * @param {http responses} res 
 */
const createNewPost = async (req, res) => {
    console.log(req.body)

    const post = Post({
        message: req.body.message,
        sender: req.body.sender
    })
    try {
        newPost = await post.save()
        res.status(200).send(newPost)
    } catch (err) {
        res.status(480).send({
            'status': 'faile',
            'message': err.message

        })
    }
}
/**
 * GET post by id
 * @param {http requests} req 
 * @param {http responses} res 
 */
const getPostById = async (req, res) => {

    console.log('getPostById id=' + req.params.id)
    const id = req.params.id


    if (id == null | id == undefined) {
        res.status(400).send({ 'err': 'no id provided' })

    }

    try {
        post_from_id = await Post.findById(id)

        res.status(200).send(post_from_id)


    } catch (err) {
        res.status(400).send({
            'status': 'fail',
            'message': err.message

        })

    }
}
/**
 * delete posts
 * @param {http requests} req 
 * @param {http responses} res 
 */
const deleteNewPost = (req, res) => {
    res.send('post post')
}
/**
 * update posts
 * @param {http requests} req 
 * @param {http responses} res 
 */
const updateNewPost = (req, res) => {
    res.send('post post')
}
module.exports = {
    getALLPosts,
    createNewPost,
    updateNewPost,
    deleteNewPost,
    getPostById

}