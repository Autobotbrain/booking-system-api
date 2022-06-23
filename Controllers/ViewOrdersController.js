const ViewOrders = require("../models/ViewOrders");


//Read(get)
const getAllOrders = async(req, res, next) =>{
    let anno;
try{
    anno= await ViewOrders.find();
} 
catch (err) {
    console.log(err);
}

if(!anno){
    return res.status(404).json({message :"No Orders Found"});
}
return res.status(200).json({ anno }); //Array name 
}

module.exports = {getAllOrders};