import React from 'react'

interface ScoreScreenProps {
  score: number
  onRestart: () => void
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, onRestart }) => (
  <div className="h-screen flex  bg-[#4242e0]">
    <div className="content-end">
      <div className="content-end-text">
        <div className="content-bravo">Bravo!</div>
        <div className="content-score ">YOU HAVE SCORED!</div>
        <div onClick={onRestart} className="content-restart">
          Wanna Play Again!
        </div>
      </div>
    </div>
    <div className="score-score">{score} / 10</div>
  </div>
)

export default ScoreScreen
