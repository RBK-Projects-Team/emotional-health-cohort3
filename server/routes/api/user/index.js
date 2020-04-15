const router = require("express").Router();
const Controller = require("../../../controllers");

router.get("/:id", Controller.UserController.getUser);

router.post("/", Controller.UserController.addUser);

router.delete("/:id", Controller.UserController.deleteUser);

router.put("/:id", Controller.UserController.updateUser);

router.post("/login", Controller.AuthController.login);

module.exports = router;
