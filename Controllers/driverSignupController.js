const User = require("../models/DriverSignup");
const bcrypt = require('bcrypt');


//Get All(get)
const getAllUsers = async(req, res, next) =>{
    let driver;
try{
    driver= await User.find();
} 
catch (err) {
    console.log(err);
}

if(!driver){
    return res.status(404).json({message :"No Users Found"});
}
return res.status(200).json({driver}); //Array name 
}

//delete 

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    let driver;
    try{
        driver = await User.findByIdAndRemove(id);
    }
    catch{
        console.log(err);
    }

    if(!driver){
        
    }
    return  res.status(404).json({message: "Successfully deleted"});
}

//Create(put)
const addUser = async(req,res,next) => {
    
    const {
        firstname,
        lastname,
        email,
        password,
        //ConfirmPassword,
        phone_number,
        nic_number,
        driving_licence_id,
        address,
        tag
  } = req.body;
    let driver;
    try{
        driver = new User({
            firstname,
            lastname,
            email,
            password,
            //ConfirmPassword,
            phone_number,
            nic_number,
            driving_licence_id,
            address,
            tag    
        });
        
        User.findOne({
            email:req.body.email
        })
        .then(user=>{
            if(!user){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    driver.password=hash
                    User.create(driver)
                        .then(user=>{
                            res.json({status:user.email+"register successfull!"})
                            
                        })
                })
            }else{
                res.json({error:"User already registered"})
                console.log(err);

                // res.sendStatus(401)

            }
        })
        .catch(err=>{
            res.send("error"+err)
        }) 
            
    } 
    catch(err){ 
        console.log(err);
       
    }

    if(!driver){
        return res.status(500).json({message:'unable to add'})
    }
    // return res.status(201).json({anno});

    
}






//Get by id
const getByUserId = async (req,res, next) => {
    const id = req.params.id;
    let driver;
    try{
        driver = await User.findById(id);
    }
    catch{
        console.log(err);
    }

    if(!driver){
        return  res.status(404).json({message: "No Book found"});
    }
    return res.status(200).json({driver})

}

//Update
const UpdateUser = async(req, res, next)=>{
    const id = req.params.id;
    const {
        firstname,
        lastname,
        email,
        password,
        //ConfirmPassword,
        phone_number,
        nic_number,
        driving_licence_id,
        address,
   } = req.body;
    let driver;
    try{
        driver = await User.findByIdAndUpdate(id,{
            //feelds that need to update
        firstname,
        lastname,
        email,
        password,
        //ConfirmPassword,
        phone_number,
        nic_number,
        driving_licence_id,
        address,
      
        });
        driver = await driver.save();
    }
    catch(err){
        console.log(err);
    }

    if(!driver){
        return res.status(404).json({message:"unable to update"});
    }
    return res.status(201).json({message:"Successfully Updated"});
    
}

const allowUpdateUser = async(req, res, next)=>{
    const id = req.params.id;
    const {
        firstname,
        lastname,
        email,
        password,
        //ConfirmPassword,
        phone_number,
        nic_number,
        driving_licence_id,
        address,
  } = req.body;
    let driver;
    try{
        driver = await User.findByIdAndUpdate(id,{
            //feelds that need to update
            firstname,
            lastname,
            email,
            password,
            //ConfirmPassword,
            phone_number,
            nic_number,
            driving_licence_id,
            address,
      
            updateaccess:true
        });
        driver = await driver.save();
    }
    catch(err){
        console.log(err);
    }

    if(!driver){
        return res.status(404).json({message:"unable to update"});
    }
    return res.status(201).json({message:"Successfully Updated"});
    
}


const getuserByNotValidation = async (req, res, next) => {
    let catergory = req.body.catergory;
    let validation = false;
    console.log(catergory);
    User.find({
      updateaccess: validation,
    }).exec((err, users) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        noaccess: users,
      });
    });
  };

 const  getuserByValidation = async (req, res, next) => {
    let catergory = req.body.catergory;
    let validation = true;
    console.log(catergory);
    User.find({
      updateaccess: validation,
    }).exec((err, users) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        noaccess: users,
      });
    });
  };


module.exports = {getAllUsers,deleteUser,addUser,getByUserId,UpdateUser,getuserByNotValidation,getuserByValidation,allowUpdateUser};