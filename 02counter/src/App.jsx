import { useState } from 'react'

import './App.css'

function App() {
// this is why state is imp because it change the values i multiple places 
// counter is a variable whereas the setCounter is a function below 
  const[counter, setCounter] = useState (0)
  // let counter = 15

  const addValue = () => {
   //setCounter(counter+1)
   // it is not updated it is still gives +1 only
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)

  // setCounter(counter+4)

   // we use this to achieve it is a function it can give a callback  
//  setCounter((prevCounter)=>prevCounter +1)
//  setCounter((prevCounter)=>prevCounter +1)
//  setCounter((prevCounter)=>prevCounter +1)
//  setCounter((prevCounter)=>prevCounter +1)
//  setCounter((prevCounter)=>prevCounter +1)
//  setCounter((prevCounter)=>prevCounter +1)
  }

  const removeValue= ()=>{
    setCounter(counter-1)
  }
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>React learning with rhea {counter}</h1>
      <h3> hellu react {counter}</h3>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      
      >add value</button> {" "}
      <button
      onClick={removeValue}
      
      >remove value</button>

      <p>footer:{counter}</p>
        
    </>
  )
}

export default App
