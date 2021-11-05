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


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});