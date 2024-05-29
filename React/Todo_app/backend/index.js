const express = require("express");
const { createTodo, updateTodo , checkid} = require("./types");
const { Todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb

    const todo = new Todo(req.body);
    await todo.save();

    res.json({
        msg: "Todo created",
        createPayload
    })
})

app.post("/update" , async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload)
        {
            res.status(411).json({
                msg: "You sent the wrong inputs",
            })
        }
    
    const todoId = req.body.id;
    const updated = await Todo.findByIdAndUpdate(todoId , {
        title : req.body.title,
        description : req.body.description,
    } , { new : true });

    res.json({
        msg: "Todo marked as completed",
        todo: updated
    });
})

app.get("/todos", async function(req, res) {
    
    const todos = await Todo.find({});

    res.json({
        todos
    })

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = checkid.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    const todoId = req.body.id;
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, { completed: true }, { new: true });

        if (!updatedTodo) {
            res.status(404).json({
                msg: "Todo not found"
            });
            return;
        }

        res.json({
            msg: "Todo marked as completed",
            todo: updatedTodo
        });
})

app.put("/delete", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = checkid.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    const todoId = req.body.id;
        const deleteTodo = await Todo.findByIdAndDelete(todoId);

        if (!deleteTodo) {
            res.status(404).json({
                msg: "Todo not found"
            });
            return;
        }

        res.json({
            msg: "Todo deleted",
            todo: deleteTodo
        });
})

app.listen(3000);