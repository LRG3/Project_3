const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: String,
  snapchat: {type: String, required: false},
  twitter: {type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Movie = mongoose.model("User", userSchema);

module.exports = User;
