import ColorValue from '../ColorValue'
import './style.css'

function ColorInfo({ info }) {
  return (
    <div className="color-info">
      Background Color:
      <ColorValue value={info} />
    </div>
  )
}

export default ColorInfo
