const express = require('express')
const cors = require('cors');

const   app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json());


app.get("/sum/:a/:b",function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let sum = parseInt(a)+parseInt(b);
    res.send(sum.toString());
});

app.listen(3000);