const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.port

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('coneceted to mongodb')
})

const body_parser = require('body-parser')

app.use(body_parser.urlencoded({ extended: true, limit: '1mb' }))
app.use(body_parser.json())


const routes = require('./routes/post_routes')
app.use('/post', routes)


app.listen(port, () => {
    console.log('server started on port' + port);

})