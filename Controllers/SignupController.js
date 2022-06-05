const Announsment = require("../models/SignUpModules");

//get
const getSignupDetails = async(req, res, next) =>{
  let anno;
try{
  anno= await SignUpModules.find();
} 
catch (err) {
  console.log(err);
}

if(!anno){
  return res.status(404).json({message :"No Announsments Found"});
}
return res.status(200).json({ anno });
}


//post
const AddVehicle = async(req,res,next) => {
    
  const {VehicleOwner,VehicleModel,VehicleNumber,Type,Seats,ID,MNumber,email,password,Date,} = req.body;
  let anno;
  try{
      anno = new vehicle({
        VehicleOwner,
        VehicleModel,
        VehicleNumber,
        Type,
        Seats,
        ID,
        MNumber,
        email,
        password,
        Date,
          
      });
      await SignUpModules.save()
  }
  catch(err){ 
      console.log(err);
     
  }

  if(!anno){
      return res.status(500).json({message:'unable to add'})
  }
  return res.status(201).json({anno});
}

exports.getSignupDetails= getSignupDetails;
exports.AddVehicle=AddVehicle;