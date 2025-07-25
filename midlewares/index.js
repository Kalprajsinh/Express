const express = require('express');

const app = express();

app.use(express.json()); //post request hendle
app.use(count);

function checkusername(req,res,next){

    if(req.body.username === "kalp")
    {
        next();
    }
    else
    {
        res.send("Invalid username");
    }
}

function checkpassword(req,res,next){

    if(req.body.password === "1234")
    {
        next();
    }
    else
    {
        res.send("Invalid password");
    }
}

let countnum = 0;
function count(req,res,next)
{
    countnum++;
    console.log(countnum)
    next()
}

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post("/user",function(req,res){
    res.send(req.body);
})

app.get("/user",checkusername,checkpassword,function(req,res){
    res.send("Welcome");
})

// Define the error handling middleware
app.use((err, req, res, next) => {
    console.log(err + " Something is wrong in server !!");
});

let data = "";

function middle(req,res,next){
    const perams = req.query;
    data += "in side middle";
    data += String(perams.name);
    next();
}

app.get("/Hello" ,middle, (req,res) => {
    data += "\n after middle"
    res.send(data);
})

// http://localhost:3000/Hello?name=Kalpraj

app.listen(3000);