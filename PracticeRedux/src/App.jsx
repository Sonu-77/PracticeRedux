import { useState } from "react"
import HomeCount from "./Component/HomeCount"
import { useDispatch, useSelector } from 'react-redux';
import { addpayload, decrement,increment } from "./features/CountSlice";



function App() {
  const [inputnum,setinputnum]= useState(0)
  

  const count = useSelector((state)=>state.Count.value)
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  function  handlenumchange(e){
    setinputnum(e.target.value)
    
  }

  function handlepayload(){
    dispatch(addpayload(inputnum))
    setinputnum(0)
  }


  return (
    <>
      <p>Count:{count}</p>
      <button onClick={handleIncrement}>Incremment</button>
      <br />
      <button onClick={handleDecrement}> Decrement</button>
      <br />
      <input type="number"
      value={inputnum}
      onChange={handlenumchange}
      />
      <br />
      <button onClick={handlepayload}>Add</button>

      <HomeCount></HomeCount>
    </>
  )
}

export default App
