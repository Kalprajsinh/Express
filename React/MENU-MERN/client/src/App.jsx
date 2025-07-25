import { useState } from 'react'
import './App.css'
import { GenerateBarChartSVG } from 'klearcharts'

function App() {

  return (
    <>
      <GenerateBarChartSVG data={[75,45,64,56,23,97,45]} width={800} height={500} animate={true}  />
    </>
  )
}

export default App
