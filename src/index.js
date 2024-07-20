import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import DBconnect from "./db/index.js";
import {app} from './app.js'


dotenv.config({ path: './.env' })


DBconnect()
.then(()=>{
    app.listen((process.env.PORT||8000,()=>{
        console.log(`server is running on port : ${process.env.PORT}`);
    }))

})
.catch((err)=>{
    console.log("DB connection failed !! ",err);
})