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
          alt="춤추는 고양이"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="control-button"
        >
          {isAnimating ? '⏸️ 일시정지' : '▶️ 춤추기'}
        </button>
        <p className="instruction">
          고양이나 버튼을 클릭하여 춤을 {isAnimating ? '일시정지' : '시작'}하세요!
        </p>
      </div>
    </div>
  )
}

export default DancingCat