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
  deleteUser(req, res, next) {
    User.remove(
      {
        _id: req.params.user_id,
      },
      function (err, user) {
        if (err) res.send(err);
        res.json({
          status: "success",
          message: "User deleted",
        });
      }
    );
  },
  viewUser(req, res, next) {
    User.findById(req.params.user_id, function (err, user) {
      // console.log(req.params.user_id);
      if (err) res.send(err);
      res.json({
        message: "user details loading..",
        data: user,
      });
    });
  },
  addUser(req, res, next) {
    console.log(req.body);
    if (User.find(req.params.user_name))
      res.json({ error: "user already exists" });
    var user = new User({
      user_name: req.body.user_name,
      password: Bcrypt.hashSync(req.body.password, 10),
    });
    // save the users and check for errors
    console.log(user);
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
