import dotenv from "dotenv"


import DBconnect from "./db/index.js"

dotenv.config({
    path:'./env'
})
DBconnect()
.then(()=>{
    app.listen((process.env.PORT||8000,()=>{
        console.log(`server is running on port : ${process.env.PORT}`);
    }))

})
.catch((err)=>{
    console.log("DB connection failed !! ",err);
})