const router = require("express").Router();

router.use("/users", require("./user"));
// router.use("/resposes", require("./responses"));

module.exports = router;
