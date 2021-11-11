require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const ClientsRouter = require("./router/client");

// set up our express app
const app = express();

// Setup static files to serve our built Vue app
const staticFilesPath = path.resolve(__dirname, "../frontend/dist");
const staticFiles = express.static(staticFilesPath);
app.use(staticFiles);

// Global app config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Setup mongo connection
mongoose.connect(process.env.database_url);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database : " + db.name));

// Setup client route
app.use("/client", ClientsRouter);

// To serve our frontend
app.get(/.*/, (_req, res) => {
    const p = path.resolve(__dirname, '../frontend/dist/index.html');
    res.sendFile(p);
});

// 404 "catch-all" route
app.use((_req, res) => {
  res.status(404).send("<h1>unable to find that</h1>");
});

// Setup app port
/* HEROKU WON'T WORK IF WE SET PORT SINCE THEY HANDLE THAT */
// process.env.port = process.env.port || 3000;

// listen for requests
app.listen(process.env.PORT, '0.0.0.0', function () {
  console.log("Ready to Go! Backend listening on port : " + process.env.port);
});
