import React, { useState, useEffect } from 'react'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import ScoreScreen from './components/ScoreScreen'
import axios from 'axios'

const App: React.FC = () => {
  const [start, setStart] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [questions, setQuestions] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    axios
      .get(
        'https://quizapi.io/api/v1/questions?apiKey=YiGgVLZXr77GXIRabHfLX1yFGOYXTafgDnGE6PPd&limit=10',
      )
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err))
  }, [])

  const handleSelectAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentIndex]: answer })
  }

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      const calculatedScore = questions.reduce((acc, question, index) => {
        const userAnswerKey = answers[index]
        const correctAnswerKey = `${userAnswerKey}_correct`
        if (question.correct_answers[correctAnswerKey] === 'true') {
          return acc + 1
        }
        return acc
      }, 0)
      setScore(calculatedScore)
      setQuizFinished(true)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRestart = () => {
    setStart(false)
    setQuizFinished(false)
    setCurrentIndex(0)
    setAnswers({})
    setScore(0)
  }

  return (
    <div>
      {!start ? (
        <StartScreen onStart={() => setStart(true)} />
      ) : quizFinished ? (
        <ScoreScreen score={score} onRestart={handleRestart} />
      ) : (
        <QuizScreen
          question={questions[currentIndex]}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentIndex] || null}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
          onPrev={handlePrev}
          isLastQuestion={currentIndex === questions.length - 1}
        />
      )}
    </div>
  )
}

export default App
