import React from 'react'

interface QuizScreenProps {
  question: any
  currentIndex: number
  totalQuestions: number
  selectedAnswer: string | null
  onSelectAnswer: (answer: string) => void
  onNext: () => void
  onPrev: () => void
  isLastQuestion: boolean
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrev,
  isLastQuestion,
}) => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
      <p className="text-sm text-gray-500">
        Pregunta {currentIndex + 1} de {totalQuestions}
      </p>
      <h2 className="text-2xl font-semibold my-4">{question?.question}</h2>
      <div className="flex flex-col gap-2">
        {Object.entries(question?.answers || {}).map(([key, value]) =>
          value ? (
            <button
              key={key}
              onClick={() => onSelectAnswer(key)}
              className={`px-4 py-2 rounded-lg ${
                selectedAnswer === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {value}
            </button>
          ) : null,
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Prev
        </button>
        {isLastQuestion ? (
          <button
            onClick={onNext}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Send
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  </div>
)

export default QuizScreen
