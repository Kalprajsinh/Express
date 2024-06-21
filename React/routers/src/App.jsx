
import React ,{ Suspense , lazy } from 'react';
import { BrowserRouter, Routes, Route ,useNavigate } from 'react-router-dom';

const Home = lazy( () => import("./component/Home"))
const About = lazy( () => import("./component/About"))
const Contact = React.lazy( () => import("./component/Contact"))



function App() {
  return (

    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Suspense fallback={"Loading.."}><Home /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={"Loading.."}><About /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={"Loading.."}><Contact /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

function Navbar(){

  const navi = useNavigate();
  return(
    <div className='w-full h-20 bg-gradient-to-tl from-green-500 to-indigo-900 flex justify-evenly items-center'>
      <button
        onClick={() => {
          navi("/");
        }}
        className=' bg-purple-700 w-20 h-8 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-indigo-600 hover:text-white'
      >
        Home
      </button>
      <button
        onClick={() => {
          navi("/about");
        }}
        className=' bg-purple-700 w-20 h-8 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-indigo-600 hover:text-white'
      >
        About
      </button>
      <button
        onClick={() => {
          navi("/contact");
        }}
        className=' bg-purple-700 w-20 h-8 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-indigo-600 hover:text-white'
      >
        contact
      </button>
    </div>
  )
}

export default App
