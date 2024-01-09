const express = require('express')
const app = express()
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hollos")
})

app.listen(port,()=>{
    console.log("its listing");
})