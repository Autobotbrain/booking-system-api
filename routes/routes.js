const express =require('express')
const router = express.Router()
const cors =require('cors')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {Error} =require('mongoose')
const signUpTemplateCopy = require('../models/SignUpModules')
router.use(cors())
process.env.SECRET_KEY = 'secret'


router.post('/signup',(request,response) => {
    const signedUpUser = {
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        password:request.body.password,
        Date:request.body.Date
    }
    // signedUpUser.save()
    // .then(data => {
    //     response.json(data)
    // })
    // .catch(error => {
    //     response.json(error)
    // })

    
    signUpTemplateCopy.findOne({
        email:request.body.email
    })
        .then(user=>{
            if(!user){
                bcrypt.hash(request.body.password,10,(err,hash)=>{
                    signedUpUser.password=hash
                    signUpTemplateCopy.create(signedUpUser)
                        .then(user=>{
                            response.json({status:user.email+"register successfull!"})
                                .catch(err=>{
                                    response.send("error"+err);
                                })
                        })
                })
            }else{
                response.json({error:"User already registered"})
            }
        })
        .catch(err=>{
            response.send("error"+err)
        })       
    
});

router.post('/login',(request,response)=>{
    signUpTemplateCopy.findOne({
        email:request.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(request.body.password,user.password)){
                    const payload={
                        _id:user._id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        email:user.email
                    }
                    let token =jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn :1440
                    })
                    response.send(token)
                    // response.send({payload})
                }else{
                    response.json({error:"User does not exist!"})
                }
            }else{
                request.json({error:"User not found"})
            }
        })
            .catch(err=>{
                response.send("error occured "+err)
            })
})

router.get('/profile',(request,response)=>{
    var decoded =jwt.verify(request.headers['authorization'],process.env.SECRET_KEY)

    signUpTemplateCopy.findOne({
        _id:decoded._id
    })
        .then(user=>{
            if(user){
                response.json(user)
            }else{
                response.send("User does not exist")
            }
        })
        .catch(err=>{
            response.send("error happen"+err)
        })
})





module.exports = router