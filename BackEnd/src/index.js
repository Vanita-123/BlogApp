import express from 'express'
import dotenv from 'dotenv' 
import URL from './db/index.js'
import router from './routes/user.route.js'
import cors from 'cors'
import cookieParser from  'cookie-parser'
const app=express() 
dotenv.config({
    path :"./.env" ,
})
const PORT = process.env.PORT || 4000;
 
app.use(express.json())
app.use("/user", router) 
// app.get("/", (req, res)=>{
//     res.send('hello world')
// })
app.use(cookieParser())
app.use(cors())
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
 
})  

 
  








//  const URI =process.env.MONGODB_URI;

//  const connectDB =async()=>{
//     try {
//         await mongoose.connect(URI).then(console.log("connected mongodb"));
//     } catch (error) {
//         console.log(error) 
//     } 
//  }
//  connectDB();   