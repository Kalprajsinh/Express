
// 1. Import Required Modules
const express = require("express");
const z = require("zod");      // (npm install zod)

// 2. Create an Express Application
const app = express()

// 3. Middleware to Parse JSON Requests
app.use(express.json());

// 4. Define a Zod Schema
const obj = z.object({
    email: z.string().email(),      // Validates that 'email' is a properly formatted email address
    password: z.string().min(8).max(32),  // Validates that 'password' is a string with 8 to 32 characters
})

// 5. Create a Middleware Function for Validation
function zodverification(req,res,next)
{
    try {
        const data = req.body;   // Extract the data from the request body
        const result = obj.parse(data)  // Validate the data using the Zod schema
        next();
    } catch (error) {
        const message = error.issues[0].message;
        const path = error.issues[0].path[0];
        const messagedisplay  = `${path} : ${message}`  // Format the error message (if need)
        res.send(messagedisplay)
    }
}

// 6. Define a Route with Middleware
app.get("/",zodverification, function(req,res){
    res.send("All good 👍")
})

// 7. Start the Server
app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})