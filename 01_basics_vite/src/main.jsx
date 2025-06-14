import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href= 'https://www.google.com' target= '_blank'>Click me</a>
)

const nextElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit'
)

createRoot(document.getElementById('root')).render(
  nextElement
)
