const express = require("express");
const router = express.Router();
const registerDonor = require("../controllers/registerDonor");

router.post("/createNewDonor", registerDonor.handleNewUser);
// router.post("/login", myUsers.login);
// router.get("/getAllUsers", myUsers.getAllUsers);
// router.get("/Users", myUsers.verifyToken);

module.exports = router;
