const express =require('express')
const router = require('express').Router()
const VehicleownerController = require("../Controllers/VehicleownerController");

router.get("/signupDetails", VehicleownerController.getAllUsers);
router.post("/signupDetails", VehicleownerController.addUser);
router.get("/signupDetails/:VehicleModel", VehicleownerController.getByUserModel);
router.put("/signupDetails/:id", VehicleownerController.UpdateUser)
router.delete("/signupDetails/:id", VehicleownerController.deleteUser)

module.exports=router