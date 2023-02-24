import './style.css'

function getRandomNumber() {
  return Math.floor(Math.random() * 255)
}

function ColorRandomizerButton({ text, handler }) {
  return (
    <button
      className="color-randomizer-button"
      onClick={() => {
        handler(
          `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
        )
      }}
    >
      {text}
    </button>
  )
}

export default ColorRandomizerButton
