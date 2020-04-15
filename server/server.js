const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

app.use(helmet());

//importing routes
const apiRoutes = require("./routes");

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
  res.sendFile(path.join(__dirname + "/../clientTest/test.html"));
});

//using route
app.use(apiRoutes);

app.listen(port, () => {
  console.log(`now listening on ` + port);
});
