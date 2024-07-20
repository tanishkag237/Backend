import mongoose from "mongoose";
import { DBNAME } from "../constants.js";



const DBconnect=async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)
        console.log(`DB connected || DB host :${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
}

export default DBconnect;