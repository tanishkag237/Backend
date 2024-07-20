import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=mongoose.Schema({

    id:{
        type:String, 
        required:true,
    },

    videoFile:{
        type:String, //cloudinary
        required:true
    },

    thumbnail:{
        type:String,
        required:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true
    },

    duration:{
        type:Number,  //cloudinary url
        required:true
    },

    views:{
        type:Number,
        default:0
    },

    isPublished:{
        type:Boolean,
        default:true
    },



},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate); // allows to write aggregate query

export const Video=mongoose.model("Video",videoSchema)