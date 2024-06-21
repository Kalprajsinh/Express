import { useState } from "react"
import GitCard from "./Git";


function App() {

  const [num , setnum] = useState(0)

  function Rendomewords(){

    let words = ["is" , "are" , "Hello" , "morning" , "after" , "for" , "somthing" , "about" , "happy"]
    let paragraph = "";
    for(let i=0;i<num;i++){
      let randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + " ";
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(paragraph);
      alert('Paragraph copied!');
    };

    return (
      <>
      <div>
        <p>{paragraph}</p>
      </div>
      <br />
      <button className="border w-1/12 bg-black text-white font-bold rounded-xl " onClick={handleCopy}>Copy</button>
      </>
    )
  }

  return (
    <>
      <div className=" font-bold text-4xl text-center">Para Generator</div>
      <div className="flex m-20 h-12 gap-10">
      <input type="text" id="num-of-para" placeholder="Enter length" className="border w-10/12 pl-5" onChange={ (e) => {setnum(e.target.value)}}/>
      <button className="border w-2/12 bg-black text-white font-bold rounded-xl" onClick={Rendomewords}>Submit</button>
      </div>
      <div className="m-20">
      <Rendomewords />
      </div>

      <GitCard />
    </>
  )
}

export default App
