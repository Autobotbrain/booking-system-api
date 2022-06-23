const express =require('express')
const router = require('express').Router()
const AnnousmentController = require("../Controllers/AnnousmentController");


router.get("/AddNewAnno", AnnousmentController.getAllAnnounsments);
router.get("/AddNewAnno/:id", AnnousmentController.getById);
router.post("/AddNewAnno", AnnousmentController.addAnnounsment);
router.put("/AddNewAnno/:id", AnnousmentController.UpdateAnnounsment);
router.delete("/AddNewAnno/:id", AnnousmentController.deleteAnnounsment);

module.exports = router