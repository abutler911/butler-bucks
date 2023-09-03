const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

router.post("/login", (req, res) => {
  // Handle login logic here, for example, check user credentials
  res.send("Logged in");
});

router.get("/register", (req, res) => {
  const messages = req.flash("error");
  res.render("register", { title: "Register", messages: messages });
});

router.post("/register", async (req, res) => {
  try {
    // Validate user input
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      req.flash("error", "All fields are required");
      return res.redirect("/register");
    }

    // Check if the email or username is already registered
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      req.flash("error", "Username or email already exists");
      return res.redirect("/register");
    }

    // Create the user
    const user = new User({ username, email, password });
    await user.save();

    // Flash a success message and redirect to login
    req.flash("success_msg", "Registration successful. Please log in.");
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    req.flash("error_msg", "An error occurred, please try again.");
    res.redirect("/register");
  }
});

module.exports = router;
