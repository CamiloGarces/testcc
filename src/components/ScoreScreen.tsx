import React from 'react'

interface ScoreScreenProps {
  score: number
  onRestart: () => void
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, onRestart }) => (
  <div className="h-screen flex flex-col items-center justify-center bg-white">
    <h2 className="text-4xl font-bold">My Score: {score}</h2>
    <button
      onClick={onRestart}
      className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
    >
      Re-start
    </button>
  </div>
)

export default ScoreScreen
