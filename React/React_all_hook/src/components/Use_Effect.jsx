


// Let you have shopping website on website load you have to display all products


import { useEffect, useState } from "react"
import React from "react"

function Use_Effect(){

  const [products , setproducts] = useState([])

    // fetch("https://sum-server.100xdevs.com/todos")             // this call infinite ........
    // .then( async (res) => {
    //     const data = await res.json();
    //     console.log(data.todos)
    //     setproducts(data.todos)    
    // })

   async function getdata(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const data = await response.json();
    console.log(data.todos)
    setproducts(data.todos)
   }

   useEffect( () => {
    getdata()
   } , [])

   

  return(
    <>
    {products.map( products => {
      return (
      <div key={products.id}>
      <hr />
      <h1>{products.title}</h1>
      <h3>{products.description}</h3>
      <hr />
      </div>)
    })}
    </>
  )
}

export default Use_Effect