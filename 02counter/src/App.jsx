import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter] = useState(5)

  //let counter = 5;
  const addvalue =() =>{
   
    //counter = counter+1
    setCounter(counter + 1)
    
  }
  const removeValue = () =>{
    setCounter(counter - 1)

  }

  return(
    <>
    <h1>chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button
    onClick={addvalue}>Add value</button>
    <br/>
    <button
    onClick={removeValue}>Remove value</button>
    
    </>
  )
}

export default App
