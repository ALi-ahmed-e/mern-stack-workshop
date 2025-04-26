import { useEffect, useRef, useState } from 'react'
import './App.css'
import Test from './components/Test'
import axios from 'axios'

function App() {

  const [inputValue, setinputValue] = useState()
  const [arr, setArr] = useState([])


  const addToArray = () => {
    const newArr = [...arr, inputValue]

    setArr(newArr)

    console.log(arr)
  }



  const testReq = async () => {
    const res = await axios.get('https://dummyjson.com/test')
    console.log(res)

  }

  // useEffect(() => {
  //   testReq()
  // }, [])


  return (
    <>
      <div className=' flex flex-col justify-around items-center '>

        <input type="text" onChange={(e) => setinputValue(e.target.value)} className='test border-2 border-red-600/90 outline bg-indigo-600 ' />
        <button className='p-2 m-2 bg-green-500 hover:bg-green-600 text-white rounded-md px-7 mx-5' onClick={() => testReq()} >Add</button>

        <Test arr={arr} />
      </div>


    </>
  )
}

export default App



