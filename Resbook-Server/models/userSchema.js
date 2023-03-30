const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookings:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DineinBookings"
    }
  ]
});
const User = new mongoose.model("Users", UserSchema, "Users");
module.exports = User;