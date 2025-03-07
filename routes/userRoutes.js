const express = require("express");
const { loginUser, getProfile } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// User login route
router.post("/login", loginUser);

// Protected route to get user profile
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
