const express = require("express")

const app = express()

app.get("/",function(req,res){
    res.send("<h1>Hello World this is in docker</h1>")
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000")
})