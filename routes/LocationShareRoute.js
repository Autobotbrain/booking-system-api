const express =require('express')
const router = require('express').Router()
const LocationShareController = require("../Controllers/LocationShareController");


router.post("/locationShare", LocationShareController.addLocation);
router.get("/locationShare", LocationShareController.getLocation);


module.exports=router