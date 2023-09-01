const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");

// Use the auth routes
router.use("/", authRoutes);

module.exports = router;
