const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savingSchema = new Schema({
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
});

const Saving = mongoose.model("Saving", savingSchema);

module.exports = Saving;
