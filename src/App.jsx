import './App.css'
import { useState } from 'react'

function getRandomNumber() {
  return Math.floor(Math.random() * 255)
}

function App() {
  const [color, setColor] = useState('rgb(255, 255, 255)')

  return (
    <div className="container parent" style={{ backgroundColor: color }}>
      <div className="child">
        <div className="color-info">
          Background color:
          <div className="color-value" style={{ color: color }}>
            {color}
          </div>
        </div>
        <div className="container">
          <button
            className="button"
            onClick={() => {
              setColor(
                `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
              )
            }}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
