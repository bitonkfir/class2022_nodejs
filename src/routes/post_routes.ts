import express from 'express'
const router = express.Router()
import Post from '../controllers/post'
import authenticate from '../common/auth_middleware'
/**
 * @swagger
 * tags:
 *   name: Post
 *   description: The post API
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - meassage
 *         - sender
 *       properties:
 *         meassage:
 *           type: string
 *           description: The user meassage
 *         sender:
 *           type: string
 *           description: The sender
 *       example:
 *         meassage: 'first message'
 *         sender: 'kfir'
 */


 /**
  * @swagger
  * /post/getAllPosts:
  *   get:
  *     summary:get All Posts
  *     tags: [Post]
  *     
  *     responses:
  *       200:
  *         description: success 
  *
  */


router.get('/',Post.getAllPosts)
/**
 * @swagger
 * /post/createNewPost:
 *   post:
 *     summary: create New Post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: created New Post
 *         content:
 *           application/json:
 *             schema:
 *               message:
 *                 type: string
 *                 description: The message
 *               sender:
 *                 type: string
 *                 description: The sender
 *               _id:
 *                 type: string
 *                 description: The message id
 *             example:
 *               "message":"first message",
 *               "sender": "kfir2"
 *               _id: "adfasdfasdfasdfsd"
 *
 */
router.post('/',authenticate,Post.createNewPost)

router.get('/:id',Post.getPostById)

router.delete('/:id',authenticate,Post.deletePostById)

export = router
