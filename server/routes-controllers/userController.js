// Import users model
User = require("../models/users.model");
// Handle index actions
// exports.index = function (req, res) {
//   console.log(new Date());
//   User.get(function (err, users) {
//     if (err) {
//       res.json({
//         status: "error",
//         message: err,
//       });
//     }
//     res.json({
//       status: "success",
//       message: "users retrieved successfully",
//       data: users,
//     });
//   });
// };
// Handle create users actions
exports.new = function async(req, res) {
  user.user_name = req.body.user_name ? req.body.user_name : user.user_name;
  request.body.password = Bcrypt.hashSync(request.body.password, 10);
  var user = new User();
  // save the users and check for errors
  user.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New user created!",
      data: user,
    });
  });
};
// Handle view user info
exports.view = function (req, res) {
  Users.findById(req.params.user_id, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "user details loading..",
      data: user,
    });
  });
};
// Handle update user info
exports.update = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.send(err);
    user.user_name = req.body.user_name ? req.body.user_name : user.user_name;
    user.password = req.body.password;
    // save the user and check for errors
    user.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "User Info updated",
        data: user,
      });
    });
  });
};
// Handle delete user
exports.delete = function (req, res) {
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
};
