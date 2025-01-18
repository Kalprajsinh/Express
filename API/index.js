const express = require("express")
const crypto = require("crypto")


const app = express();

const apistore = new Set();

app.get("/generate-key" , function(req,res){
    const apikey = crypto.randomBytes(32).toString('hex');
    apistore.add(apikey);
    res.json({apikey});
})

// Middleware

function validkey(req,res,next){
    const apikey = req.headers['apikey'];
    if(!apikey){
        return res.status(401).json({error:"No apikey provided"})
    }
    if(!apistore.has(apikey)){
        return res.status(401).json({error:"Invalid apikey"})
    }
    next();
}

app.get("/hello", validkey , function(req,res){
    res.json({
        name: "Rohan",
        age: 20
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})