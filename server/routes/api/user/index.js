const router = require("express").Router();
const Controller = require("../../../controllers");

router.get("/:id", Controller.UserController.getUser);

router.post("/add", Controller.UserController.addUser);

router.delete("/:id", Controller.UserController.deleteUser);

router.get("/getAll", Controller.UserController.viewUser);

router.post("/login", Controller.AuthController.login);

module.exports = router;
