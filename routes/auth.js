const { Router } = require("express");
const authController = require("../controllers/auth");

const router = Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.logIn);
router.post("/logout", authController.logOut);

module.exports = router;
