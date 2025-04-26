import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  

  const testReq = async ()=>{
  const res = await axios.get('http://localhost:8000',{test: 'test'})

  console.log(res)
  }

  return (
    <>
     <button onClick={testReq}>test</button>
    </>
  )
}

export default App
