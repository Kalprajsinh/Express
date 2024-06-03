import React from 'react';

function WrapperComponents() {
  return (
    <div style={{ display: "flex" }}>
      <Card child={<InsideComponent />} />
      <Card child={<InsideComponent2 />} />
      <Card child={<InsideComponent />} />
      <Card child={<InsideComponent2 />} />
      <Card child={<Card child={<Card child={<InsideComponent />} />} />} />
    </div>
  );
}

function Card({ child }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: 10,
      margin: 10,
      boxShadow: "10px 10px 10px lightblue"
    }}>
      {child}
    </div>
  );
}

function InsideComponent() {
  return (
    <>
      <p>Hello</p>
    </>
  );
}

function InsideComponent2() {
  return (
    <>
      <div>
        <button>button</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, sint?</p>
      </div>
    </>
  );
}

export default WrapperComponents;




// import { useState } from 'react'
// import './App.css'
// import Hearders from '../components/headers'

// function App() {
//   return (
//     <>
//       <Hearderswithbutton />
//       <Hearders sername="Rana" name="Kalpraj" fathername="M." />
      
//     </>
//   )
// }

// function Hearderswithbutton(){

//   const [title, setTitle] = useState("Rajvir")
//   const [a, setA] = useState(false);

//   function changeTitle(){
//     console.log("changeTitle called");
//     if(!a)
//     {
//       setTitle("The change title " + Math.random());
//       setA(true)
//     }
//     else
//     {
//       setTitle("Rajvir");
//       setA(false)
//     }
//   }
  
//   return(
//     <>
//     <button onClick={changeTitle} >Click to change Name</button>
//     <Hearders sername="rothod" name={title} fathername="M." />
//     </>
//   )
// }

// export default App

