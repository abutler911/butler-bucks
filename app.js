const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const mainRoutes = require("./routes");
const dashboardRoute = require("./routes/dashboard");
const sessionMiddleware = require("./middleware/sessionMiddleware");

// EJS and layouts
app.use(expressLayouts);
app.use(sessionMiddleware);
app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use("/", dashboardRoute);

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Butler Bucks" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log(`Butler Bucks is listening on port ${port}!`);
});
