import {z} from "zod"; // or const zod = require('zod')
// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();
//empty types
z.undefined();
z.null();
z.void(); // accepts undefined
// catch-all types
// allows any value
z.any();
z.unknown();
// never type
// allows no values
z.never();

////////////////////////

const schema = z.coerce.string()
schema.parse(input) // if false then give error
schema.safeParse(input) // give all things



const express = require('express');

const zod = require('zod')

const app = express();

app.use(express.json());

const myinput = zod.array(zod.string())
// ["str1" , "str2"]

const myinput2 = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    country: zod.literal("India").or(zod.literal("USA")),
    age: zod.number()
});


app.get("/",function(req,res){
    const input = req.body;
    const result = myinput2.safeParse(input);

    res.send(result)

    if(result.success)
    {
        console.log(result.success);
        console.log(result.data);
    }
    else
    {
        console.log(result.error.issues.map(issue => issue.message));
    }
})

app.listen(3000);

// true
// { name: 'kalp', email: 'a@gmail.com', country: 'India', age: 12 }

