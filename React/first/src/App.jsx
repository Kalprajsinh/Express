import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count , state] = useState(10)

  return (
    <>
      <Mycustomebutton count={count} state={state}></Mycustomebutton>
    </>
  )
}

// function Mycustomebutton({ count, state }){
function Mycustomebutton(prop){

  function changestate(){
    prop.state(prop.count+10)
  }

  return <button onClick={changestate}>count is {prop.count}</button>
}

export default App
