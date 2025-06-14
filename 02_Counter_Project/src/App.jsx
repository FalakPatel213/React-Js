import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1);
    }
    console.log("Value Added");

  }

  const rmValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Value Removed");
  }
  return (
    <>
      <h1>Hello, Its Falak Learning React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={
        addValue
      }>
        Add Value
      </button>
      <br />
      <button onClick = {
        rmValue
      }>
        Remove Value
      </button>
    </>
  )
}

export default App
