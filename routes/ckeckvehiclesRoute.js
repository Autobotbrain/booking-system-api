const express =require('express')
const router = require('express').Router()
const checkVehicleController = require("../Controllers/CheckVehicleRController");


router.get("/checkVehicles", checkVehicleController.getAllvehicles);

module.exports = router