const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  bookingAt: {
    type: Date,
    required: true,
  },
  bookingOn: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
  },
  vehicle: { type: mongoose.ObjectId, required: true, ref: "Vehicle" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  is :{
    type:Boolean,
    default:true
  }
});

var Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
