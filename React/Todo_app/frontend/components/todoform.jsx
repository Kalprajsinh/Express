import axios from "axios";
import React , {useState , useEffect} from "react";

function Todoform(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);

    async function getdata(){
        axios.get('http://localhost:3000/todos')
        .then(function (response) {
            setTodos(response.data.todos)
        })
    }

    useEffect(() => {
        getdata();
    }, []);

    async function addata (title,description) {
        await axios.post("http://localhost:3000/todo" , {title:title, description:description})
        .then(function(response){
            console.log(response);
        })

        getdata()
    }

    async function deletedata(id){
        await axios.put("http://localhost:3000/delete",{id})
        getdata()
    }

    async function completedtask(id,completed){
        if(!completed)
        {
            await axios.put("http://localhost:3000/completed",{id})
            getdata()
        }       
    }

    async function updatedata (id,title,description) {
        await axios.post("http://localhost:3000/update" , {id:id ,title:title, description:description})
        .then(function(response){
            console.log(response);
        })

        getdata()
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addata(title,description)
        setTitle('');
        setDescription('');
    };

    return(
        <>
        <div className="todoform">
        <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <br /> <br />            
            <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            <br /> <br /> 
            <button>Add Todo</button>
            </form>

            <div>
                <ul>
                    {todos.map(todo => (
                        <div key={todo._id}  style={{color:"black"}}>
                            {todo.title}
                            <li>{todo.description}</li>
                            <button onClick={() => completedtask(todo._id,todo.completed)}> {todo.completed ? "completed" : "not completed"}</button>
                            <button onClick={() => deletedata(todo._id)}> delete </button>
                            <button onClick={() => updatedata(todo._id, title, description)}>update</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Todoform