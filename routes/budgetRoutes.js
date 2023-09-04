const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const fixedExpenses = [
    { name: "Mortgage", oct: 2100, total: 25200 },
    // ... other fixed expenses
  ];

  const variableExpenses = [
    { name: "Food", oct: 1500, total: 18000 },
    // ... other variable expenses
  ];

  res.render("budget", {
    fixedExpenses,
    variableExpenses,
    title: "Butler Budget",
  });
});

// You can add more budget-related routes here.

module.exports = router;
