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
    ref: "users",
  },
  vehicle: { type: mongoose.ObjectId, required: true, ref: "Vehicles" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  is :{
    type:Boolean,
    default:true
  }
});

var Booking = mongoose.model("Bookings", BookingSchema);

module.exports = Booking;
