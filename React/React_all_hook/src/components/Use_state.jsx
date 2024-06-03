import { useState } from "react"
import React from "react"

let a = true

function Use_state(){

  const [string , Setstring] = useState("Hello..")
  const [data , setdata] = useState([])

  function changestring(){
    if(a)
      {
        Setstring("Bye..")
        a = false
      }
      else{
        Setstring("Hello..")
        a = true
      }
  }

  function addpoint(){
    Setstring(string + "...")
  }

  async function getdata(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const data = await response.json()
    console.log(data.todos)
    setdata(data.todos);
  }

  return(
    <>
    <h1 onClick={addpoint}>{string}</h1>
    <button onClick={getdata}>get data</button>
    {data.map( data => {
      return (
      <div key={data.id}>
      <hr />
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <hr />
      </div>)
    })}
    </>
  )
}

export default Use_state