const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

router.get("/budget", async (req, res, next) => {
  try {
    const year = new Date().getFullYear();
    const fixedExpenses = await Expense.find({ nature: "Fixed", year });
    const variableExpenses = await Expense.find({ nature: "Variable", year });

    const fixedTotal = fixedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0,
    );

    const groupByMonth = (expenses) => {
      const months = Array.from({ length: 12 }, (_, i) => []);
      expenses.forEach((expense) => {
        months[expense.month - 1].push(expense);
      });
      return months;
    };

    const groupedFixed = groupByMonth(fixedExpenses);
    const groupedVariable = groupByMonth(variableExpenses);

    res.render("budget", {
      groupedFixed,
      groupedVariable,
      fixedTotal,
      title: "Butler Budget",
      success_msg: req.flash("success_msg"),
      error_msg: req.flash("error_msg"),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
