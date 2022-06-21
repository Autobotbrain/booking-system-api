const express =require('express')
const router = require('express').Router()
const editPermission = require("../Controllers/PermissionRequest");


router.post("/getPermission", editPermission.getPermission);
router.post("/updatePermission/:id",editPermission.UpdatePermission)

module.exports=router