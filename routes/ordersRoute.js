const express =require('express')
const router = require('express').Router()
const OrdersController = require("../Controllers/ViewOrdersController");


router.get("/getAll",OrdersController.getAllOrders );


module.exports=router