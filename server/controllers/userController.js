const User = require("../models/users.model");
const Bcrypt = require("bcryptjs");
module.exports = {
  getUser(req, res, next) {
    User.get(function (err, users) {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.json({
        status: "success",
        message: "users retrieved successfully",
        data: users,
      });
    });
  },
  deleteUser(req, res, next) {},
  updateUser(req, res, next) {},
  addUser(req, res, next) {
    var user = new User({
      user_name: req.body.user_name,
      password: Bcrypt.hashSync(request.body.password, 10),
    });
    // save the users and check for errors
    user.save(function (err) {
      // if (err)
      //     res.json(err);
      res.json({
        message: "New user created!",
        user,
      });
    });
  },
};
