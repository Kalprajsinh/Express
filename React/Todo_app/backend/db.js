const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo_app')
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err))

const data = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('todo_data',data);

module.exports = {
    Todo
}

