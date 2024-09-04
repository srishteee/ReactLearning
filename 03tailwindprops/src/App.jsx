import { useState } from 'react'

import './App.css'
// import { Component } from 'react'
import Card from './components/Card'
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

let myObj= {
  name : 'Srishti',
  age: 24,
  address : {
    city : 'Delhi',
    state : 'Delhi',
    country :'India'
  }
}
let newArr= [1,2,3,4,5,6,7,8,9,]
  return (
    
   <>
   <h1 className='text-3xl bg-green-500 p-3'>
    Vite with Tailwind</h1>
  
    <Card username = "rhea" myArr = {[newArr]}/> 
    <Card />
    <Card username="abhinav"/>
    <Footer about="this is about the footer"/>
   </>
  )
}

export default App
