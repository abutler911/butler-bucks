const express = require("express");
const { ensureAuthenticated } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  const user = req.session.user;
  const username = user ? user.username : "";
  const isAdmin = user && user.roles ? user.roles.includes("isAdmin") : false;
  const isLoggedIn = !!user;
  console.log("Is Logged In:", isLoggedIn); // Debug
  res.render("dashboard", {
    title: "Dashboard",
    isAdmin,
    isLoggedIn,
    username,
  });
});

module.exports = router;
