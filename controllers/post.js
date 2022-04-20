/**
 * gets all the posts
 * @param {http requests} req 
 * @param {http responses} res 
 */

const getALLPosts = (req, res) => {
    res.send('post get')
}
/**
 * create new posts
 * @param {http requests} req 
 * @param {http responses} res 
 */
const createNewPost = (req, res) => {
    res.send('post post')
}
module.exports = {
    getALLPosts,
    createNewPost
}