const express =require('express')
const router = require('express').Router()
const driverSignupController = require("../Controllers/driverSignupController");

router.get("/signupDetails", driverSignupController.getAllUsers);
router.get("/signupDetails/updatedeny", driverSignupController.getuserByNotValidation);
router.get("/signupDetails/updateallow", driverSignupController.getuserByValidation);
router.post("/signupDetails", driverSignupController.addUser);
router.get("/signupDetails/:id", driverSignupController.getByUserId);
router.put("/signupDetails/:id", driverSignupController.UpdateUser)
router.put("/allowupdate/:id", driverSignupController.allowUpdateUser)
router.delete("/signupDetails/:id", driverSignupController.deleteUser)

module.exports=router