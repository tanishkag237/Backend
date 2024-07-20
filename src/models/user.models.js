import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,  // for searching field
        lowercase:true,
        trim:true
    },
        
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    }, 
        
    fullname:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true
    }, 

    avatar:{
        type:String,  // cloudinary url
        required:true,
    },

    coverimg:{
        type:String,  
        required:false,
    },

    watchHistory:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video",
    }],

    password:{
        type:String,  // should be encrypted
        required:[true,"password if required"],
    },

    refreshToken:{
        type:String,
    }


},{timestamps:true})

//middleware
userSchema.pre("save", async function(next){     // pre -> kind of action (eg - to encrypt password) before saving data // async because function is time consuming
    if(!this.isModified("password")) return next(); //negative check kia hai 
    this.password=bcrypt.hash(this.password,8) // 8 is no of rounds
    next()
})      

userSchema.methods.isPasswordCorrect=async function(password){  //custom method injected
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
   return  jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }


)
}

userSchema.methods.generateRefreshToken=function(){
    return  jwt.sign({
        _id:this._id,
        
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}




export const User=mongoose.model("User",userSchema)