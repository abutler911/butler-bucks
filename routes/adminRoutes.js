const express = require("express");
const {
  ensureAuthenticated,
  ensureAdmin,
} = require("../middleware/authMiddleware"); // Update the path
const router = express.Router();

router.get("/admin", ensureAuthenticated, ensureAdmin, (req, res) => {
  res.render("admin", { title: "Admin Dashboard" });
});

module.exports = router;
