
const express = require('express')
const router = require('express').Router()
const ParentController = require("../Controllers/parentController");

router.get("/signupDetails", ParentController.getAllUsers);
router.get("/signupDetails/updatedeny", ParentController.getuserByNotValidation);
router.get("/signupDetails/updateallow", ParentController.getuserByValidation);
router.post("/signupDetails", ParentController.addUser);
router.get("/signupDetails/:id", ParentController.getByUserId);
router.put("/signupDetails/:id", ParentController.UpdateUser)
router.put("/allowupdate/:id", ParentController.allowUpdateUser)
router.delete("/signupDetails/:id", ParentController.deleteUser)

module.exports = router