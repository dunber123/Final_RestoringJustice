require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser');
// set up our express app
const app = express()
app.use(cors());

mongoose.connect(process.env.database_url);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


app.use(express.json())

const clientsRouter = require('./router/client')
app.use('/client', clientsRouter)

// listen for requests
process.env.port = process.env.port || 3000
app.listen(process.env.port, function(){
    console.log('Ready to Go! Backend listening on port : ' + process.env.port);
});