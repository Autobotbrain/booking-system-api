const User = require("../models/StaffmemberModel");

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



//Create
const addUser = async(req,res,next) => {
    
    const { firstName,lastName,phoneNumber,nic,address,email,password,confirmPassword,Date} = req.body;
    let anno;
    try{
        anno = new User({
            firstName,
            lastName,
            phoneNumber,
            nic,
            address,
            email,
            password,
            confirmPassword,
            Date
        });
        await anno.save()
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
const getByUserId = async (req,res, next) => {
    const id = req.params.id;
    let anno;
    try{
        anno = await User.findById(id);
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
    const { firstName,lastName,phoneNumber,nic,address,email,password,confirmPassword,Date} = req.body;
    let anno;
    try{
        anno = await User.findByIdAndUpdate(id,{
            //feelds that need to update
            firstName,
            lastName,
            phoneNumber,
            nic,
            address,
            email,
            password,
            confirmPassword,
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




module.exports = {getAllUsers,addUser,getByUserId,UpdateUser,deleteUser};