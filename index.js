const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dotenv =require('dotenv')
const routesUrls =require('./routes/routes')
//const signupRoutes = require("./routes/SignupRoute");

const cors = require('cors')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())

app.use('/app',  routesUrls)
// app.use('/signup',  signupRoutes)

app.listen(4000, () => console.log("server is up and running"))

//Chamika