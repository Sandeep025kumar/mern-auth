const express =require('express');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
const mongoose = require('mongoose');
const cors = require('cors');
const {MONGO} = process.env
mongoose.connect(MONGO)
.then(()=>{
    console.log('Mongodb connected');
})
.catch((err)=>{
    console.log("Mongodb not connected",err);
})
app.use(cors());
app.use(express.json());
app.use('/api',userRoute);
app.use('/api/auth',authRoutes);
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})

app.listen(4000,()=>{
    console.log("server is listening on port:4000");
})