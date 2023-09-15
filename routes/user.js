
const express = require("express")
const { logincontroller, registercontroller } = require("../controller/usercontroller")

// router object
const router = express.Router()

// router
// post login user 
router.post("/login", logincontroller)
// post register
router.post("/register", registercontroller)
module.exports = router