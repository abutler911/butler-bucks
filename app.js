const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// EJS and layouts
app.use(expressLayouts);
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Butler Bucks" });
});

app.listen(port, () => {
  console.log(`Butler Bucks is listening on port ${port}!`);
});
