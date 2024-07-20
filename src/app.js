import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
})) // for middleware

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))   //for url data configuration
app.use(express.static("public"))   //public file folder pdf access

app.use(cookieParser())

//routes import
import router from "./routes/user.routes.js"

//route declaration
app.use("/api/v1/users",router)

//https://loaclhost:8000/api/v1/users/*register
// * konsa route call krna hai

export {app}