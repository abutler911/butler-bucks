const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["Projected", "Actual"],
    default: "Projected",
  },
  nature: {
    type: String,
    enum: ["Fixed", "Variable"],
    default: "Fixed",
  },
  category: {
    type: String,
    enum: [
      "Food",
      "Utilities",
      "Entertainment",
      "Health",
      "Transport",
      "Other",
    ],
    default: "Other",
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
