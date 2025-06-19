import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mb-5'>Tailwind Test</h1>
      <Card title= "Falak" btnText= "Buy Now"/>
      <br />
      <Card title= "Hello"/>

    </>
  )
}

export default App
