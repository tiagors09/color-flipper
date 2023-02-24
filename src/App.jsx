import './App.css'
import { useState } from 'react'
import ColorRandomizerButton from './components/ColorRandomizerButton'
import ColorInfo from './components/ColorInfo'

function App() {
  const [color, setColor] = useState('rgb(255, 255, 255)')

  return (
    <div
      className="centralize-flex occupy-the-whole-screen"
      style={{ backgroundColor: color }}
    >
      <div className="child">
        <ColorInfo info={color} />
        <div className="centralize-flex">
          <ColorRandomizerButton text="Click Me" handler={setColor} />
        </div>
      </div>
    </div>
  )
}

export default App
