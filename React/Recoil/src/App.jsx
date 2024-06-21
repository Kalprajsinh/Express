// const count = useRecoilValue(countAtom)  -- only value
// const setCount = useSetRecoilState(countAtom);   -- only set function (not rerender)
// const [count , setCount] = useRecoilState(countAtom) -- both

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, divideSelector } from "./store/atom/count"

function App() {

  return (
    <RecoilRoot>
      <Child />
    </RecoilRoot>
  )
}

function Child()
{
  return(
    <div>
      <Printcount />
      <Button />
      <Even />
    </div>
  )
}

function Even(){
  const v = useRecoilValue(divideSelector);

  return(
    <div>
      <h2>Is count Divide Five? : {v ? "Yes" : "No"}</h2>
    </div>
  )
}

function Printcount()
{
  const count = useRecoilValue(countAtom)

  return(
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function Button()
{
  // const [count , setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);

  function changevalue()
  {
    setCount(count => count + 1);
  }

  return(
    <button onClick={changevalue}>Click</button>
  )
}

export default App