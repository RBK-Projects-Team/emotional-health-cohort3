var mongoose = require("mongoose");

var usersSchema = mongoose.Schema({
  userName: String,
  password: String,
});

var users = mongoose.model("users", usersSchema);

module.exports.users = users;
