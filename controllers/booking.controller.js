const Booking = require("../models/bookingdetail.model");
const Vehicle = require("../models/vehicle.model");

const getNVehicle = (module.exports.getNVehicle = async function () {
  try {
    var data = await Vehicle.aggregate([
      {
        $lookup: {
          from: "bookings",
          localField: "_id",
          foreignField: "vehicle",
          as: "trans",
        },
      },
      {
        $match: {
          "trans.vehicle": {
            $exists: false,
          },
        },
      },
    ]);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports.setBooking = async function (body) {
  body.bookingAt = new Date(body.bookingAt);
  body.bookingOn = new Date(body.bookingOn);
  var Model = new Booking(body);
  if (Model) {
    try {
      await Model.save();
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

module.exports.deleteBooking = async function (body) {
  var Model = await Booking.findByIdAndUpdate(body, { is: false });

  if (Model) {
    try {
      await Model.save();
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

const getSucsess = (module.exports.getSucsess = async function () {
  var Model = await Booking.find({ is: true });

  if (Model) {
    try {
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
