const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

router.post("/login", (req, res) => {
  // Handle login logic here, for example, check user credentials
  res.send("Logged in");
});

router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

router.post("/register", (req, res) => {
  // Handle registration logic here, for example, save user to database
  res.send("Registered");
});

module.exports = router;
