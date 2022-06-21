const express =require('express')
const router = require('express').Router()
const viewordersController = require("../Controllers/ViewBookingController");


router.get("/getAllOrders",viewordersController.getAllOrders );


module.exports=router