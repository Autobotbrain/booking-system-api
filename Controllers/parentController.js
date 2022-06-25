const User = require("../models/parent");
const bcrypt = require('bcrypt');

//Get All(get)
const getAllUsers = async (req, res, next) => {
    let parent;
    try {
        parent = await User.find();
    }
    catch (err) {
        console.log(err);
    }

    if (!parent) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ parent }); //Array name 
}

//delete 

const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let parent;
    try {
        parent = await User.findByIdAndRemove(id);
    }
    catch {
        console.log(err);
    }

    if (!parent) {

    }
    return res.status(404).json({ message: "Successfully deleted" });
}

//Create(put)
const addUser = async (req, res, next) => {

    const { firstName,
        lastName,
        email,
        password,
        //confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool,
        tag } = req.body;
    let parent;
    try {
        parent = new User({
            firstName,
            lastName,
            email,
            password,
            //confirmpassword,
            nic,
            address,
            contactNumbers,
            childName,
            childSchool,
            tag
        });

        User.findOne({
            email: req.body.email
        })
            .then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        parent.password = hash
                        User.create(parent)
                            .then(user => {
                                res.json({ status: user.email + "register successfull!" })

                            })
                    })
                } else {
                    res.json({ error: "User already registered" })
                }
            })
            .catch(err => {
                res.send("error" + err)
            })

    }
    catch (err) {
        console.log(err);

    }

    if (!parent) {
        return res.status(500).json({ message: 'unable to add' })
    }



}






//Get by id
const getByUserId = async (req, res, next) => {
    const id = req.params.id;
    let parent;
    try {
        parent = await User.findById(id);
    }
    catch {
        console.log(err);
    }

    if (!parent) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ parent })

}

//Update
const UpdateUser = async (req, res, next) => {
    const id = req.params.id;
    const { firstName,
        lastName,
        email,
        password,
        //confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool, } = req.body;
    let parent;
    try {
        parent = await User.findByIdAndUpdate(id, {
            //feelds that need to update
            firstName,
            lastName,
            email,
            password,
            //confirmpassword,
            nic,
            address,
            contactNumbers,
            childName,
            childSchool,
        });
        parent = await parent.save();
    }
    catch (err) {
        console.log(err);
    }

    if (!parent) {
        return res.status(404).json({ message: "unable to update" });
    }
    return res.status(201).json({ message: "Successfully Updated" });

}

const allowUpdateUser = async (req, res, next) => {
    const id = req.params.id;
    const { firstName,
        lastName,
        email,
        password,
        //confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool, } = req.body;
    let parent;
    try {
        parent = await User.findByIdAndUpdate(id, {
            //feelds that need to update
            firstName,
            lastName,
            email,
            password,
            //confirmpassword,
            nic,
            address,
            contactNumbers,
            childName,
            childSchool,
            updateaccess: true
        });
        parent = await parent.save();
    }
    catch (err) {
        console.log(err);
    }

    if (!parent) {
        return res.status(404).json({ message: "unable to update" });
    }
    return res.status(201).json({ message: "Successfully Updated" });

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

const getuserByValidation = async (req, res, next) => {
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


module.exports = { getAllUsers, deleteUser, addUser, getByUserId, UpdateUser, getuserByNotValidation, getuserByValidation, allowUpdateUser };