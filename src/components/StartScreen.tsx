import React from 'react'

interface StartScreenProps {
  onStart: () => void
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center bg-[#4242e0] text-white">
    <div className="content-start">
      <div className="start-title">QUIZZLER</div>
      <div className="start-forge">Forge/</div>
      <div className="start-lets" onClick={onStart}>
        {`Let's start the quiz ->`}
      </div>
    </div>
  </div>
)

export default StartScreen
