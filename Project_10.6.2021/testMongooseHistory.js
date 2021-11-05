const mongoose = require("mongoose");
const faker = require("faker");
const Client = require("./models/client");

const MONGO_URI = "mongodb://192.168.1.157:27017";
const DATABASE_NAME = "restoring_justice";
const COLLECTION_NAME = "clients";

mongoose.connect(`${MONGO_URI}/${DATABASE_NAME}`);
mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("Connected to Database"));

Main();

async function Main() {
  try {
    const docs = await Client.find();
    const SOME_DOC_ID = docs[0]._id;
    const updates = { caseManager: faker.name.firstName() };
    const result = await Client.findByIdAndUpdate(SOME_DOC_ID, updates);
    console.log(result.length);

    mongoose.connections.forEach(connection => connection.close(() => console.log("closed " + connection.name)));
  } catch (e) {
    console.error(e);
    mongoose.disconnect();
  } 
}
