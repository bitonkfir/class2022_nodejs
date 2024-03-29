"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = __importDefault(require("../controllers/auth"));
const auth_middleware_1 = __importDefault(require("../common/auth_middleware"));
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Authentication API
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
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *       example:
 *         email: 'bob@gmail.com'
 *         password: '123456'
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: registers a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Login success retuns access and refresh tokens and user id
 *         content:
 *           application/json:
 *             schema:
 *               access_token:
 *                 type: string
 *                 description: The refresh Token
 *               refresh_token:
 *                 type: string
 *                 description: The refresh Token
 *               _id:
 *                 type: string
 *                 description: The user id
 *             example:
 *               access_token: '223412341...'
 *               refresh_token: '123456...'
 *               _id: "adfasdfasdfasdfsd"
 *
 */
router.post("/register", auth_1.default.register);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Register success retuns access and refresh tokens and user id
 *         content:
 *           application/json:
 *             schema:
 *               access_token:
 *                 type: string
 *                 description: The refresh Token
 *               refresh_token:
 *                 type: string
 *                 description: The refresh Token
 *               _id:
 *                 type: string
 *                 description: The user id
 *             example:
 *               access_token: '12341234...'
 *               refresh_token: '234234234...'
 *               _id: "adfasdfasdfasdfsd"
 *
 */
router.post("/login", auth_1.default.login);
/**
 * @swagger
 * /auth/refresh:
 *   get:
 *     summary: refresh access token using the refresh token
 *     tags: [Auth]
 *
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success retuns access and refresh tokens and user id
 *         content:
 *           application/json:
 *             schema:
 *               access_token:
 *                 type: string
 *                 description: The refresh Token
 *               refresh_token:
 *                 type: string
 *                 description: The refresh Token
 *               _id:
 *                 type: string
 *                 description: The user id
 *             example:
 *               access_token: '21341234...'
 *               refresh_token: '123412341...'
 *               _id: "adfasdfasdfasdfsd"
 *
 */
router.get("/refresh", auth_1.default.renewToken);
/**
 * @swagger
 * /auth/test:
 *   get:
 *     summary: test access token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *
 */
router.get("/test", auth_middleware_1.default, auth_1.default.test);
/**
* @swagger
* /auth/logout:
*   post:
*     summary: logout user
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: login success retuns access and refresh tokens will be 0 cause no server for now
*         content:
*           application/json:
*             schema:
*               access_token:
*                 type: string
*                 description: The refresh Token
*               refresh_token:
*                 type: string
*                 description: The refresh Token
*               _id:
*                 type: string
*                 description: The user id
*             example:
*               access_token: '12341234...'
*               refresh_token: '0'
*               _id: "adfasdfasdfasdfsd"
*
*/
router.post("/logout", auth_1.default.logout);
router.get("/test2", auth_1.default.test);
module.exports = router;
//# sourceMappingURL=auth_routes.js.map