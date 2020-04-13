const express = require("express");
const app = express();
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const ourDB =
  "mongodb://ctn3-db:ctn3-db@ds026898.mlab.com:26898/emotional-db-ctn3";
var users = require("./models/users.model");
let apiRoutes = require("./routes/api-routes");

app.use("/api", apiRoutes);

const port = process.env.port || 5000;

app.use(express.static(__dirname + "/../clientTest"));
app.use(express.static("clientTest"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../clientTest/test.html"));
});

MongoClient.connect(ourDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  console.log("Connected to Database");
});
var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

//posting data to database.
//sign up API - USE thru Postman/Insomnia.
app.post("/api/user/signup", (req, res) => {
  console.log("hello");
});

app.listen(port, () => {
  console.log(`now listening on ` + port);
});
