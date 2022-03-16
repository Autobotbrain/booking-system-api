const express = require('express')
const router = express.Router()
const Driver = require('../models/Driver');

router.route('/signup').post((req,res)=>{
    const { 
    id,
    FirstName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
    Phone_Number,
    NIC_Number,
    Driving_Licence_Id,
    Address
} = req.body;

    var newDriver = new Driver({
        id,
        FirstName,
        LastName,
        Email,
        Password,
        ConfirmPassword,
        Phone_Number,
        NIC_Number,
        Driving_Licence_Id,
        Address
  
      
    });

    newDriver.save().then(()=>{
        res.json("Driver Added.");
    }).catch(()=>{
        res.send(err);
    });
})

router.route('/').get((req,res)=>{
    Driver.find().then((Driver)=>{
        res.json(Driver);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/update/:id').put((req,res)=>{
    var DrivertId = req.params.id;
    const { 
        id,
        FirstName,
        LastName,
        Email,
        Password,
        ConfirmPassword,
        Phone_Number,
        NIC_Number,
        Driving_Licence_Id,
        Address
  } = req.body;
    var updateDriver = {
        id,
        FirstName,
        LastName,
        Email,
        Password,
        ConfirmPassword,
        Phone_Number,
        NIC_Number,
        Driving_Licence_Id,
        Address
  
      
    };
    var update = Driver.findByIdAndUpdate(DriverId,updateDriver).then((update)=>{
        res.json(update);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/delete/:id').delete((req,res)=>{
    var DriverId = req.params.id;
    Driver.findByIdAndDelete(DriverId).then((Driver)=>{
        res.json(Driver);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/:id').get((req,res)=>{
    var DriverId = req.params.id;
    Parent.findById(DriverId).then((Driver)=>{
        res.json(Driver);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;