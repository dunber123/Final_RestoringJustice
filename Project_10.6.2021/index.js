require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan");
const bodyParser = require('body-parser');
// set up our express app
const app = express()

mongoose.connect(process.env.database_url)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

const clientsRouter = require('./router/client')
app.use('/client', clientsRouter)

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go!');
});