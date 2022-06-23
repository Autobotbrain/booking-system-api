const express =require('express')
const router = require('express').Router()
const paymentController = require("../Controllers/paymentController");


router.get("/getAll", paymentController.getAllPayment);
router.post("/approvepayment", paymentController.approvepayment);

module.exports=router