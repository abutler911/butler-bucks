const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const app = express();
const { port } = require("./config/index");
const adminRoutes = require("./routes/adminRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const mainRoutes = require("./routes");
const dashboardRoute = require("./routes/dashboard");

const connectDB = require("./config/db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// EJS and layouts
app.use(expressLayouts);

app.set("view engine", "ejs");

// Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

// Connect Flash
app.use(flash());

// Global Vars for flash messages
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", mainRoutes);
app.use("/", dashboardRoute);
app.use("/", adminRoutes);
app.use("/", expenseRoutes);
app.use("/", budgetRoutes);

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Butler Bucks" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render("error", {
    error: err,
    title: "Error",
  });
});

app.listen(port, () => {
  console.log(`Butler Bucks is listening on port ${port}!`);
});
