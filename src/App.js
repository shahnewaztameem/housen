import React from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import background from './assets/images/background/bgShape.png'

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <HomePage />
    </div>
  )
}

export default App
