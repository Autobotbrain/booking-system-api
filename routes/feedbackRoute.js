const express =require('express')
const router = require('express').Router()
const FeedBackController = require("../Controllers/FeedBackController");


router.get("/getAllFeedBacks", FeedBackController.getAllFeedBacks);
router.delete("/getAllFeedBacks/:id", FeedBackController.deleteFeedback);

module.exports=router