const router = require("express").Router();

router.use("/user", require("./user"));
// router.use("/resposes", require("./responses"));

module.exports = router;
