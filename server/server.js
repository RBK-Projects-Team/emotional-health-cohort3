const express = require("express");
const app = express();
let path = require("path");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

//importing routes
let apiRoutes = require("./routes/api-routes");

const ourDB =
  "mongodb://ctn3-db:ctn3-db@ds026898.mlab.com:26898/emotional-db-ctn3";
let users = require("./models/users.model");
// const MongoClient = require("mongodb").MongoClient;

const port = process.env.port || 5000;

app.use(express.static(__dirname + "/../clientTest"));
app.use(express.static("clientTest"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../clientTest/test.html"));
});

// MongoClient.connect(ourDB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   console.log("Connected to Database");
// });
mongoose.connect(ourDB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// db.on("error", function () {
//   console.log("mongoose connection error");
// });

// db.once("open", function () {
//   console.log("mongoose connected successfully");
// });

//posting data to database.
//sign up API - USE thru Postman/Insomnia.
app.post("/api/user/signup", (req, res) => {
  console.log("hello");
});

//using /api route
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`now listening on ` + port);
});
