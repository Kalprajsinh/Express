import React from 'react'
import { useEffect, useState } from 'react'

function Todo() {
    const [todos, Settodos] = useState([]); 
    const [input, Setinput] = useState(""); 
    const [updateinput, Setupdateinput] = useState(""); 
    const [openinput, Setopeninput] = useState(false);
    const [editIndex, SeteditIndex] = useState(null); 
  
    useEffect(() => {
      console.log(todos)
    }, [todos]);
  
  
    return (
      <>
        <h1>TODO List</h1>
        <hr />
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => Setinput(e.target.value)}
          />
          <button
            onClick={() => {
              if (input.trim()) {
                Settodos([...todos, input]);
                Setinput(""); 
              }
            }}
          >
            Add todo
          </button>
        </div>
        <div>
          {todos.map((item, i) => (
            <div key={i}>
              {item} -
              <button
                onClick={() => {
                  const newTodos = todos.filter((todo) => todo !== item);
                  Settodos(newTodos);
                }}
              >
                delete
              </button>
              {openinput && editIndex === i && (
                <>
                  <input
                    type="text"
                    value={updateinput}
                    onChange={(e) => Setupdateinput(e.target.value)}
                  />
                  <button onClick={ () => {
                    if (updateinput.trim()) {
                      const updatedTodos = [...todos];
                      updatedTodos[editIndex] = updateinput;
                      Settodos(updatedTodos);
                      Setupdateinput("");
                      Setopeninput(false);
                      SeteditIndex(null);
                    }
                  }}>Update</button>
                </>
              )}
  
              {!openinput || editIndex !== i ? (
                <button
                  onClick={() => {
                    Setupdateinput(item); 
                    SeteditIndex(i);
                    Setopeninput(true); 
                  }}
                >
                  update
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </>
    );
}

export default Todo