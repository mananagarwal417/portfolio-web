const router = require("express").Router();
const User = require("../models/user");
const { handlePostRequest } = require("../controllers/userRoute");

router.route("/contact").post(handlePostRequest);

module.exports = router;