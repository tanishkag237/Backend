import { asynhandler } from "../utils/asyncHandler.js";

const registerUser=asynhandler(async(req,res)=>{
   return res.status(200).json({
        message:"ok",
    })
    
})

export {registerUser}