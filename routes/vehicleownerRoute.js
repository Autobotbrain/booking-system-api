const express =require('express')
const router = require('express').Router()
const VehicleownerController = require("../Controllers/VehicleownerController");

router.get("/signupDetails", VehicleownerController.getAllUsers);
router.get("/signupDetails/updatedeny", VehicleownerController.getuserByNotValidation);
router.get("/signupDetails/updateallow", VehicleownerController.getuserByValidation);
router.post("/signupDetails", VehicleownerController.addUser);
router.get("/signupDetails/:id", VehicleownerController.getByUserId);
router.put("/signupDetails/:id", VehicleownerController.UpdateUser)
router.put("/allowupdate/:id", VehicleownerController.allowUpdateUser)
router.delete("/signupDetails/:id", VehicleownerController.deleteUser)

module.exports=router