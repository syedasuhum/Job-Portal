const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;