import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState('purple');

// we can use this way also and without making the function we can also use that :)
  // function changeColor(color){
  //   setColor(color)

  // }

  return (
  
    <div 
   
    className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
      
    <div className='fixed flex justify-center bottom-12 inset-x-0'>
  
      <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
     <>
   
          <button
          onClick={()=> setColor('violet')}
          className = 'outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            
          violet</button>
          </>
        <button 
        onClick={()=> setColor('red')}
        className = 'outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
        <button
        onClick={()=> setColor('blue')}
        className = 'outline-none px-4 py-1 rounded-full shadow-lg text-black'>Blue</button>
      </div>
    </div>
  </div>
  )
}

export default App
