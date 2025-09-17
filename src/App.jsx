import React, { useState } from 'react'

const questions = [
  {
    "id": 1,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 2,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 3,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 4,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 5,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 6,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 7,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 8,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 9,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 10,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 11,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 12,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 13,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 14,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 15,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 16,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 17,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 18,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 19,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 20,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 21,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 22,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 23,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 24,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 25,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 26,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 27,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 28,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 29,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 30,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 31,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 32,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 33,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 34,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 35,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 36,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 37,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 38,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  },
  {
    "id": 39,
    "question": "What is the correct way to create a variable in Python?",
    "options": [
      "x == 5",
      "x = 5"
    ],
    "answer": "x = 5",
    "explanation": "In Python, '=' assigns a value to a variable."
  },
  {
    "id": 40,
    "question": "Which operator is used for equality check in Python?",
    "options": [
      "=",
      "=="
    ],
    "answer": "==",
    "explanation": "In Python, '==' is used to compare values for equality, while '=' assigns a value."
  }
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [explanation, setExplanation] = useState("")
  const [finished, setFinished] = useState(false)

  const handleAnswer = (option) => {
    const q = questions[current]
    if (option === q.answer) {
      setScore(score + 1)
      setExplanation("✅ Correct! " + q.explanation)
    } else {
      setExplanation("❌ Not quite. " + q.explanation)
    }
    setShowExplanation(true)
  }

  const nextQuestion = () => {
    const next = current + 1
    if (next < questions.length) {
      setCurrent(next)
      setShowExplanation(false)
      setExplanation("")
    } else {
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h1>
        <p className="text-lg">You scored {score} out of {questions.length}.</p>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full">
        <h2 className="text-xl font-bold mb-4">Question {current + 1} / {questions.length}</h2>
        <p className="mb-6 text-lg">{q.question}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="p-3 bg-blue-200 rounded-xl hover:bg-blue-300 font-semibold"
            >
              {opt}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mb-4 text-center font-medium">
            <p>{explanation}</p>
            <button
              onClick={nextQuestion}
              className="mt-4 px-4 py-2 bg-green-300 rounded-lg hover:bg-green-400"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
