import React, { useEffect, useState } from 'react';
import WrapperComponents from '../components/Wrapper_compo_memo';

function App() {
  return (
    <>
    <WrapperComponents />
    <Tododata />
    </>
  );
}

function Tododata() {
  const [todos, setTodos] = useState([]);

  async function getdata(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const data = await response.json()
    console.log(data)
    setTodos(data.todos);
  }

  useEffect(
    () => {
      getdata();
    } , []
  )

  return(
    <div>
      <h3>Todo Data</h3>
      <ul>
        {todos.map(todo => (
          <>
            <hr />
            <li key={todo.id}>{todo.title}</li>
            <p>{todo.description}</p>
            <hr />
          </>
        ))}
      </ul>
    </div>
  )
}

export default App;


