const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const { port, MONGODB_URI } = require("./config/index");

const mainRoutes = require("./routes");
const dashboardRoute = require("./routes/dashboard");

const connectDB = require("./config/db");
connectDB();

// EJS and layouts
app.use(expressLayouts);

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
