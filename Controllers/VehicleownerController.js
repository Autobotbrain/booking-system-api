const User = require("../models/Vehicleowner");

//Get All(get)
const getAllUsers = async(req, res, next) =>{
    let anno;
try{
    anno= await User.find();
} 
catch (err) {
    console.log(err);
}

if(!anno){
    return res.status(404).json({message :"No Users Found"});
}
return res.status(200).json({ anno }); //Array name 
}

//delete 

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    let anno;
    try{
        anno = await User.findByIdAndRemove(id);
    }
    catch{
        console.log(err);
    }

    if(!anno){
        
    }
    return  res.status(404).json({message: "Successfully deleted"});
}

//Create(put)
const addUser = async(req,res,next) => {
    
    const { VehicleOwner,VehicleModel,VehicleNumber,Type,Seats,ID,MNumber,email,password,Date,tag} = req.body;
    let anno;
    try{
        anno = new User({
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
            tag
        });
        await anno.save()
        console.log(anno)
    } 
    catch(err){ 
        console.log(err);
       
    }

    if(!anno){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({anno});
}






//Get by id
// const getByUserId = async (req,res, next) => {
//     const id = req.params.id;
//     let anno;
//     try{
//         anno = await User.findById(id);
//     }
//     catch{
//         console.log(err);
//     }

//     if(!anno){
//         return  res.status(404).json({message: "No Book found"});
//     }
//     return res.status(200).json({anno})

// }
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
const UpdateUser = async(req, res, next)=>{
    const id = req.params.id;
    const { VehicleOwner,VehicleModel,VehicleNumber,Type,Seats,ID,MNumber,email,password,Date} = req.body;
    let anno;
    try{
        anno = await User.findByIdAndUpdate(id,{
            //feelds that need to update
            VehicleOwner,
            VehicleModel,
            VehicleNumber,
            Type,
            Seats,
            ID,
            MNumber,
            email,
            password,
            Date
        });
        anno = await anno.save();
    }
    catch(err){
        console.log(err);
    }

    if(!anno){
        return res.status(404).json({message:"unable to update"});
    }
    return res.status(201).json({message:"Successfully Updated"});
    
}




module.exports = {getAllUsers,deleteUser,addUser,getByUserModel,UpdateUser};