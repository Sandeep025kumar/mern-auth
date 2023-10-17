const express =require('express');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/user.route')
const mongoose = require('mongoose');
const {MONGO} = process.env
mongoose.connect(MONGO)
.then(()=>{
    console.log('Mongodb connected');
})
.catch((err)=>{
    console.log("Mongodb not connected",err);
})

app.use('/api',userRoute)

app.listen(4000,()=>{
    console.log("server is listening on port:4000");
})