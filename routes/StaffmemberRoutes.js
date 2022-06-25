const express =require('express')
const router = require('express').Router()
const Staffmember = require("../Controllers/StaffmemberController");

router.get("/signupDetails", Staffmember.getAllUsers);
router.post("/signupDetails", Staffmember.addUser);
router.get("/signupDetails/:id", Staffmember.getByUserId);
router.put("/signupDetails/:id", Staffmember.UpdateUser)
router.delete("/signupDetails/:id", Staffmember.deleteUser)

module.exports=router

