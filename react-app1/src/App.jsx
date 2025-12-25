import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1);
  let increaseCount = () => { 
    setCounter(counter + 1);
    console.log("Increase count ", counter);
  }

  return (
    <>
    <h1>Hello react</h1>
    <button onClick={increaseCount}>Increase count: {counter - 1}</button>
    <br />
    <button>Decrease count</button>
    </>
  )
}

export default App
