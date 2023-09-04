const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

router.post("/login", async (req, res) => {
  // Validate user input
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please enter all required fields");
  }

  // Check if the user exists
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).send("User not found");
  }

  // Compare the password entered by the user to the password stored in the database
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(401).send("Invalid password");
  }

  // Login the user
  req.session.user = user;
  res.redirect("/dashboard");
});

router.get("/logout", (req, res) => {
  // Clear the user session
  req.session.destroy();
  res.redirect("/");
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
