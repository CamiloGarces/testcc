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
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
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
  <div className="h-screen flex flex-col items-center justify-center bg-[#C8D2D9] p-6 overflow-y-auto">
    <div className=" p-6 max-w-xl w-full">
      <p className="question">
        QUESTION {currentIndex + 1} / {totalQuestions}
      </p>
      <h2 className="question-complete text-[#4242E0] text-2xl my-4 text-center">
        {question?.question}
      </h2>
      <div className="flex flex-col gap-2">
        {Object.entries(question?.answers || {}).map(([key, value], index) =>
          value ? (
            <button
              key={key}
              onClick={() => onSelectAnswer(key)}
              className={`rows-questions flex items-center gap-3 px-5 py-2 border border-[#4242E0] text-[#4242E0] ${
                selectedAnswer === key
                  ? 'bg-blue-500 text-[#fff]'
                  : 'bg-[#C8D2D9]'
              }`}
            >
              <span className="flex items-center justify-center w-6 h-6 bg-[#4242E0] text-white rounded-full">
                {letters[index]}
              </span>
              {value}
            </button>
          ) : null,
        )}
      </div>
      <div className=" footer-buttons flex justify-between mt-4">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-[#4242E0] disabled:opacity-30"
        >
          Prev
        </button>
        {isLastQuestion ? (
          <button
            onClick={onNext}
            className="px-4 py-2 bg-green-500 text-white"
          >
            Send
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-4 py-2 bg-[#4242E0] text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  </div>
)

export default QuizScreen
