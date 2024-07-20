import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //file system -> read write remove permission change



    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary=async(localFilePath)=>{
        try {
            if(!localFilePath) return null
            //upload file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            // file has been successfully uplaoded
            console.log("file successfully uplaoded on cloudinary",response.url);
            return response;
            
        } catch (error) {
            fs.unlinkSync(localFilePath) // remove locally saved temp file as operation got failed
            return null;
        }

    }
    export {uploadOnCloudinary}
    
    //cloudinary.v2.uploader.upload("",{},function(error,result) {console.log(result);})