const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Added to parse JSON bodies

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log("Error in Connecting to Database:", error));

// Define a Mongoose schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  value: Number
});

const Item = mongoose.model("Item", itemSchema);

// GET: Display all data in the database
app.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST: Save data in the database
app.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    value: req.body.value
  });
  
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT: Update data in the database
app.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id, 
      { name: req.body.name, value: req.body.value }, 
      { new: true, runValidators: true }
    );
    
    if (!updatedItem) {
      return res.status(404).send("Item not found");
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE: Remove data in the database
app.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).send("Item not found");
    }

    res.json(deletedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
