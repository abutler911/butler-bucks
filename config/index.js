require("dotenv").config();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;

module.exports = {
  port,
  MONGODB_URI,
  SESSION_SECRET,
};
