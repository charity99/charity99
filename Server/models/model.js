const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema

const Users = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    passWord: {
      type: String,
      required: true,
    },
    userToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
