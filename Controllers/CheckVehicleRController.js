const Announsment = require("../models/Vehicleowner");


//Read(get)
const getAllvehicles = async(req, res, next) =>{
    let anno;
try{
    anno= await Announsment.find();
} 
catch (err) {
    console.log(err);
}

if(!anno){
    return res.status(404).json({message :"No Vehicles Found"});
}
return res.status(200).json({ anno }); //Array name 
}

module.exports = {getAllvehicles};