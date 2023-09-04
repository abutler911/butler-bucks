const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// GET route to display the 'Add Expense' form
router.get("/add-expense", (req, res) => {
  res.render("add-expense", { title: "Add Expense" });
});

// POST route to handle form submission
router.post("/add-expense", async (req, res) => {
  try {
    const newExpense = new Expense({
      name: req.body.name,
      amount: req.body.amount,
      type: req.body.type,
      nature: req.body.nature,
      category: req.body.category,
      month: req.body.month,
      year: req.body.year,
    });

    await newExpense.save();

    res.redirect("/budget");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
