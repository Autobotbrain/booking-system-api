const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: "Users",
  },
  drivervehicle: { type: mongoose.ObjectId, required: true, ref: "Vehicles" },
});

var Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
