import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config({
    path:"./.env"
})

const URL= process.env.MONGODB_URI;

const connectedDB= async()=>{
    try {
       await mongoose.connect(URL);
        console.log("connected mongodb") 
    } catch (error) {
        console.log( " Error in mongodb:", error)
    }
}
connectedDB();  

export default URL;