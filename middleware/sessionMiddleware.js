const session = require("express-session");

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, // For HTTPS set to true
});

module.exports = sessionMiddleware;
