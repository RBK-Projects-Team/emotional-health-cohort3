const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
let mongoose = require("mongoose");
const db = require("../mongo-database/index");
const ourDB = require("../mongo-database/index");
app.use(helmet());

//importing routes
const apiRoutes = require("./routes/index");

const port = process.env.port || 5000;

app.use(express.static(__dirname + "/../clientTest"));
app.use(express.static("clientTest"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../clientTest/public/index.html"));
});
mongoose.connect(ourDB.ourDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//using route
app.use(apiRoutes);

app.listen(port, () => {
  console.log(`now listening on ` + port);
});
