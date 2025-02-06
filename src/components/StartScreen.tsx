import React from 'react'

interface StartScreenProps {
  onStart: () => void
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
    <h1 className="text-4xl font-bold">Encuesta</h1>
    <button
      onClick={onStart}
      className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-lg"
    >
      Let's the quiz
    </button>
  </div>
)

export default StartScreen
