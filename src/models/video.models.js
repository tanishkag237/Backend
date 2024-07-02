import mongoose from "mongoose";

const videoSchema=mongoose.Schema({},{timestamps:true})

export const Video=mongoose.model("Video",videoSchema)