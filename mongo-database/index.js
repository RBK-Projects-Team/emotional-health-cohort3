let mongoose = require("mongoose");

const ourDB =
  "mongodb://ctn3-db:ctn3-db@ds026898.mlab.com:26898/emotional-db-ctn3";

mongoose.connect(ourDB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

exports.db = db;
