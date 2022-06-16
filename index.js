const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes.index");

// load .env file in to  bash
require("dotenv").config();

//get
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// reg routing table

app.use("/api/", routes);
app.get('/web',(req,res)=>{
  res.send("<h1>Hello wordld</h1>")
})

// COnnect to db server
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
