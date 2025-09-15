import React, { useState } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : 'paused'}`}
        onClick={toggleAnimation}
      >
        <img
          src={catImage}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="control-button"
        >
          {isAnimating ? '⏸️ Pause' : '▶️ Dance'}
        </button>
        <p className="instruction">
          Click the cat or button to {isAnimating ? 'pause' : 'start'} dancing!
        </p>
      </div>
    </div>
  )
}

export default DancingCat