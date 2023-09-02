const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const debtSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
  },
  dueDate: {
    type: Date,
  },
});

const Debt = mongoose.model("Debt", debtSchema);

module.exports = Debt;
