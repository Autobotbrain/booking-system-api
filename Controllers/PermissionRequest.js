const User = require("../models/PermissionRequest");

//Get All(get)




//Create(put)
const getPermission = async(req,res,next) => {
    
    const { passengerId,state} = req.body;
    let anno;
    try{
        anno = new User({
            passengerId,
            state
        });
        await anno.save()
        console.log(req)
    } 
    catch(err){ 
        console.log(err);
       
    }

    if(!anno){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({anno});
}







const getByUserModel = async (req,res, next) => {
    const model = req.params.VehicleModel;
    let anno;
    try{
        anno = await User.find({VehicleModel:model});
    }
    catch{
        console.log(err);
    }

    if(!anno){
        return  res.status(404).json({message: "No Book found"});
    }
    return res.status(200).json({anno})

}

//Update
const UpdatePermission = async(req, res, next)=>{
    const quaryId = req.params.id;
    const { passengerId, state} = req.body;
    let anno;
    try{
        anno = await User.findByIdAndUpdate(quaryId,{
            //feelds that need to update
            passengerId,
            state
           
        });
        anno = await anno.save();
    }
    catch(err){
        console.log(err);
    }

    if(!anno){
        return res.status(404).json({message:"unable to update"});
    }
    // return res.status(201).json({message:"Successfully Updated"});
    return res.status(201).json({anno});
    
}




module.exports = {getPermission,getByUserModel,UpdatePermission};