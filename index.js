const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const routesUrls =require('./routes/routes')
const path =require('path')
const cors = require('cors')
const fileUpload=require('express-fileupload')
const bodyParser=require('body-parser')
const bookingRoutes=require('./routes/booking')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected")).catch(err=>console.log(err))

app.use(express.json())
app.use(cors())
app.use('/app',  routesUrls)
app.listen(5000, () => console.log("server is up and running port 5000"))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/bookings',bookingRoutes)
//app.use('/payment',bookingRoutes)
//app.use('/vehicle',bookingRoutes)
//app.use('/resovation',bookingRoutes)
app.use(fileUpload())

app.post('/upload',(req,res)=>{
    if(req.files===null){
        return res.status(400).json({msg:'No files to upload'})
    }
    const file =req.files.file;
    console.log(__dirname)
    file.mv(`models/uploads/${file.name}`,err=>{
        if(err){
            console.error(err);
            res.status(500).send(err)
        }
        res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
    })

})

const corsOptions={
    origin:'*',
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
