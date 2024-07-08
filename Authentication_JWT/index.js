const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const cors = require('cors');

const jwtPassword = "123456";

// '' mongodb+srv://kalpraj51:dYt7CIyDXwi6gZbL@cluster0.qfsnyra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to Database"))
.catch((error) => console.log("Error in Connecting to Database:", error));

const User = mongoose.model("user", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async function(req, res) {
  try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newuser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword 
        });

        const saveduser = await newuser.save();
        
        var token = jwt.sign({ username: req.body.username }, jwtPassword); // Use a separate secret key

        res.status(201).json({
            user: saveduser,
            token
        });

    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/", function (req, res) {
    const token = req.headers.token;
    
    try {
      const decoded = jwt.verify(token, jwtPassword);
      const username = decoded.username;
      
      res.send(username);
      
    } catch (err) {
      return res.status(403).json({
        msg: "Invalid token",
      });
    }
  });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
