// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB().then((value) => {
    app.listen(process.env.PORT & 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
    }) 
}).catch((error)=>{
    console.log("MongoDB connection failed !!", error);
})




















// import express from "express"
// const app = express()


// (async()=>{
// try{
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("ERROR:",error);
//     throw error
//    })

//    app.listen(process.env.PORT,()=>{
//     console.log(`App is listing on port ${process.env.PORT}`);
//    })


// }catch(error){
//     console.error("ERROR", error);
//     throw err
// }
// })()