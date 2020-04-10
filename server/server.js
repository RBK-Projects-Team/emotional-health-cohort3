const express = require("express");
const app = express();
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");

const port = process.env.port || 5000;

app.use(express.static(__dirname + "/../clientTest"));
app.use(express.static("clientTest"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../clientTest/test.html"));
});
app.listen(port, () => {
  console.log(`now listening on ` + port);
});
