const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema

const Donor = new Schema(
  {
    role: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donors", Donor);
