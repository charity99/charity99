const express = require("express");
const router = express.Router();
const donorController = require("../controllers/donorController");
const beneficerController = require("../controllers/beneficerController");
const adminController = require("../controllers/adminController");
const verifyJWT = require("../middleware/verifyJWT");
// Login and Registeration
router.post("/createAdmin", adminController.handleNewUser);
router.post("/adminVerify", adminController.handleLogin);
//admin
router.post("/createNewDonor", donorController.handleNewUser);
router.post("/createNewBeneficer", beneficerController.handleNewUser);
router.post("/donorVerify", donorController.handleLogin);
router.post("/beneficerVerify", beneficerController.handleLogin);
router.get("/getAllDonors", donorController.getAllDonors);
router.get("/getAllBeneficer", beneficerController.getAllBeneficer);
router.get("/getDonor", verifyJWT.verifyJWT, donorController.getDonor);
router.get(
  "/getBeneficer",
  verifyJWT.verifyJWT,
  beneficerController.getBeneficer
);
router.put(
  "/deleteBeneficer/:id",
  verifyJWT.verifyJWT,
  beneficerController.deleteBeneficer
);
router.put(
  "/deleteDonor/:id",
  verifyJWT.verifyJWT,
  donorController.deleteDonor
);

module.exports = router;
