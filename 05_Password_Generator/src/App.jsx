import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'tailwindcss'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (characters) str += "!@#$%^&*+_/?<>{}[]()~`-=/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numbers, characters, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, characters, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto my-8 shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-xl my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 h-10'>
          <input
            type="text"
            value={password}
            className='outline-none w-full rounded-l-md py-1 px-3 bg-white'
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className='bg-blue-600 w-20 text-white hover:bg-blue-700 transition-colors duration-300'
            onClick={copyPassToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
            <div className='flex items-center ml-5'>
              <input
                type="checkbox"
                defaultChecked={numbers}
                id="numbers"
                onChange={() => { setNumbers((prev) => !prev) }}
              />
              <label className='ml-3'>Number</label>
            </div>
            <div className='flex items-center ml-5'>
              <input
                type="checkbox"
                defaultChecked={characters}
                id="characters"
                onChange={() => { setCharacters((prev) => !prev) }}
              />
              <label className='ml-3'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
