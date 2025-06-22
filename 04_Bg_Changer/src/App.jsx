import { useState } from 'react'
import './App.css'
import 'tailwindcss'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className= 'w-screen h-screen duration-200' style= {{ backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("red")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("blue")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("green")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("olive")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("pink")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
