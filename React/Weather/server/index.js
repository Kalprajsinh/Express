
const express = require('express')
const axios = require('axios')
const cors = require('cors');

const app = express()

app.use(cors())

app.get("/weather/:city", async function(req,res){
    try {
    const city = req.params.city;
    
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=39dc9d9369ff4e689a4102448241206&q=${city}&aqi=no`)

    const data = response.data;
    res.json(data);
    } catch (error) {
        res.send();
    }

})

app.listen(3000);