const express = require("express")
const crypto = require("crypto");
const axios = require("axios");


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

app.get("/data", async function(req, res) {
  try {
    const response = await fetch("https://colormagic.app/api/palette/search?q=person");
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/data2", async function(req, res) {
    try {
      const response = await axios.get("https://colormagic.app/api/palette/search?q=person");
      const data = response.data;
      console.log(data);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})