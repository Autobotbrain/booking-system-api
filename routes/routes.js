const express =require('express')
const router = express.Router()
const cors =require('cors')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {Error} =require('mongoose')
const Vehiclle = require('../models/Vehicleowner')
const Driver = require('../models/DriverSignup')
const Staff = require('../models/StaffmemberModel')
const Parent = require('../models/parent')

router.use(cors())
process.env.SECRET_KEY = 'secret'




router.post('/login', (request, response) => {

    
    if (request.body.tag == "vehicle") {
        Vehiclle.findOne({
            email: request.body.email
        })
            .then(user => {
                console.log(request.body)
                if (user) {
                    if (bcrypt.compareSync(request.body.password, user.password)) {

                        const payload = {
                            _id: user._id,
                            email: user.email,
                            VehicleOwner: user.VehicleOwner,
                            VehicleModel: user.VehicleModel,
                            Type: user.Type,
                            Seats: user.Seats,
                            ID: user.ID,
                            MNumber: user.MNumber,
                            Date: user.Date,
                            tag: user.tag

                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        response.send(token)
                        // response.send({payload})
                    } else {
                        response.json({ error: "User does not exist!" })
                    }
                } else {
                    request.json({ error: "User not found" })
                }
            })
            .catch(err => {
                response.send("user not found :" + err)
            })
    }
    
    else if (request.body.tag == "driver") {
        Driver.findOne({
            email: request.body.email
        })
            .then(user => {
                console.log(request.body)
                if (user) {
                    if (bcrypt.compareSync(request.body.password, user.password)) {

                        const payload = {
                            _id: user._id,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            phone_number: user.phone_number,
                            nic_number: user.nic_number,
                            driving_licence_id: user.driving_licence_id,
                            address: user.address,
                            tag: user.tag

                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        response.send(token)
                        // response.send({payload})
                    } else {
                        response.json({ error: "User does not exist!" })
                    }
                }
                else {
                    request.json({ error: "User not found" })
                }
            })
            .catch(err => {
                response.send("user not found :" + err)
            })
        
    }
    
    else if (request.body.tag == "staff") {
        Staff.findOne({
            email: request.body.email
        })
            .then(user => {
                console.log(request.body)
                if (user) {
                    if (bcrypt.compareSync(request.body.password, user.password)) {

                        const payload = {
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            phoneNumber: user.phoneNumber,
                            nic: user.nic,
                            city: user.city,
                            company: user.company,
                            email: user.email,
                            Date: user.Date,
                            tag: user.tag

                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        response.send(token)
                        // response.send({payload})
                    } else {
                        response.json({ error: "User does not exist!" })
                    }
                }
                else {
                    request.json({ error: "User not found" })
                }
            })
            .catch(err => {
                response.send("user not found :" + err)
            })
        
    } 

    else if (request.body.tag == "parent") {
        Parent.findOne({
            email: request.body.email
        })
            .then(user => {
                console.log(request.body)
                if (user) {
                    if (bcrypt.compareSync(request.body.password, user.password)) {

                        const payload = {
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            nic: user.nic,
                            address: user.address,
                            contactNumbers: user.contactNumbers,
                            childName: user.childName,
                            childSchool: user.childSchool,
                            tag: user.tag

                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        response.send(token)
                        // response.send({payload})
                    } else {
                        response.json({ error: "User does not exist!" })
                    }
                }
                else {
                    request.json({ error: "User not found" })
                }
            })
            .catch(err => {
                response.send("user not found:" + err)
            })
        
    }
    
    
    else {
        response.send("tag not identified:" + err)
    }


})







module.exports = router