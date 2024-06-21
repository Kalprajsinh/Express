import { useState , createContext, useContext } from 'react'

const ABCD = createContext(0)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ABCD.Provider value={count}>
        <Child setCount={setCount}/>
      </ABCD.Provider>
    </>
  )
}

function Child({setCount})
{
  return(
    <div>
      <Printcount />
      <Button setCount={setCount} />
    </div>
  )
}

function Printcount()
{
  const count = useContext(ABCD)

  return(
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function Button({setCount})
{
  const count = useContext(ABCD)

  function changevalue()
  {
    setCount(count + 1);
  }

  return(
    <button onClick={changevalue}>Click</button>
  )
}

export default App
