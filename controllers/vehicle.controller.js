const Vehicle = require("../models/vehicle.model");
const mongoose = require("mongoose");

module.exports.addVehicle = async function (body) {
  var Model = new Vehicle(body);

  console.log(Model);

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

module.exports.getVehicles = async function (body = 5) {
  try {
    var a = await Vehicle.find().limit(body);
    return a;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
