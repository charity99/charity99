const express = require("express");
const router = express.Router();
const myUsers = require("../controllers/cont");

router.post("/createAccount", myUsers.postData);
router.post("/login", myUsers.login);
router.get("/getAllUsers", myUsers.getAllUsers);
router.get("/Users", myUsers.verifyToken);

module.exports = router;
