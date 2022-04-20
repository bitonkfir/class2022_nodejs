const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.port


const routes = require('./routes/post_routes')
app.use('/post', routes)

app.listen(port, () => {
    console.log('server started on port' + port);

})