import React, { useState } from 'react'

const questions = [
  {
    question: "Which of these is a valid variable name in Python?",
    options: ["2number", "my_variable"],
    answer: "my_variable",
    explanation: "Variable names cannot start with a number. 'my_variable' is valid."
  },
  {
    question: "What will this condition output? if 5 > 3: print('Yes')",
    options: ["Yes", "No"],
    answer: "Yes",
    explanation: "Since 5 is greater than 3, the condition is true and 'Yes' will print."
  },
  {
    question: "Which operator is used for equality in Python?",
    options: ["=", "=="],
    answer: "==",
    explanation: "'=' assigns values, '==' checks equality."
  },
  {
    question: "Which data type does Python use for whole numbers?",
    options: ["int", "str"],
    answer: "int",
    explanation: "'int' represents integers (whole numbers)."
  },
  {
    question: "What is the result of 7 % 2?",
    options: ["1", "3"],
    answer: "1",
    explanation: "% is the modulo operator. 7 divided by 2 leaves remainder 1."
  },
  {
    question: "Which of these is a Boolean value?",
    options: ["True", "10"],
    answer: "True",
    explanation: "Boolean values are True or False."
  },
  {
    question: "What will print? x = 5; print(x == 5)",
    options: ["True", "False"],
    answer: "True",
    explanation: "x == 5 checks equality, which is True."
  },
  {
    question: "Which operator means 'not equal to' in Python?",
    options: ["!=", "=>"],
    answer: "!=",
    explanation: "!= is the not-equal operator."
  },
  {
    question: "What keyword is used to start a conditional in Python?",
    options: ["if", "for"],
    answer: "if",
    explanation: "'if' starts a conditional block."
  },
  {
    question: "Which operator is used for 'and' logic?",
    options: ["and", "&"],
    answer: "and",
    explanation: "Python uses 'and' for logical AND."
  },
  {
    question: "What will this print? print(type('Hello'))",
    options: ["<class 'str'>", "<class 'int'>"],
    answer: "<class 'str'>",
    explanation: "'Hello' is a string, so type is <class 'str'>."
  },
  {
    question: "Which of these is a string?",
    options: ["42", "'42'"],
    answer: "'42'",
    explanation: "Quotes make it a string. Without quotes it's an integer."
  },
  {
    question: "What does input('Name: ') return?",
    options: ["Always a string", "It depends"],
    answer: "Always a string",
    explanation: "input() always returns a string, even if the user types numbers."
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["#", "//"],
    answer: "#",
    explanation: "Python uses '#' for comments."
  },
  {
    question: "Which operator is used for OR logic?",
    options: ["or", "||"],
    answer: "or",
    explanation: "Python uses 'or' for logical OR."
  },
  {
    question: "What is the output? print(3 * 'Hi')",
    options: ["HiHiHi", "Error"],
    answer: "HiHiHi",
    explanation: "Strings can be multiplied by integers to repeat them."
  },
  {
    question: "Which operator is used to raise a number to a power?",
    options: ["**", "^"],
    answer: "**",
    explanation: "In Python, '**' is exponentiation."
  },
  {
    question: "What will print? x = 10; x = x + 2; print(x)",
    options: ["12", "10"],
    answer: "12",
    explanation: "x was updated to 10 + 2 = 12."
  },
  {
    question: "What keyword starts a loop?",
    options: ["for", "next"],
    answer: "for",
    explanation: "'for' is used to start a loop in Python."
  },
  {
    question: "What is the output? for i in range(3): print(i)",
    options: ["0 1 2", "1 2 3"],
    answer: "0 1 2",
    explanation: "range(3) produces 0, 1, 2."
  },
  {
    question: "What is the type of True in Python?",
    options: ["bool", "int"],
    answer: "bool",
    explanation: "True and False are of type bool."
  },
  {
    question: "Which function gives the length of a string?",
    options: ["len()", "count()"],
    answer: "len()",
    explanation: "len() returns the number of characters in a string."
  },
  {
    question: "What will this print? print('A' in 'Cat')",
    options: ["True", "False"],
    answer: "True",
    explanation: "'A' is present in 'Cat' (case-sensitive)."
  },
  {
    question: "What is the result of 10 // 3?",
    options: ["3", "3.33"],
    answer: "3",
    explanation: "// does floor division, dropping the decimal part."
  },
  {
    question: "Which operator joins two strings?",
    options: ["+", "*"],
    answer: "+",
    explanation: "The + operator concatenates strings."
  },
  {
    question: "What is the output? print(5 > 7)",
    options: ["False", "True"],
    answer: "False",
    explanation: "5 is not greater than 7, so it is False."
  },
  {
    question: "Which is correct syntax to define a variable?",
    options: ["x = 5", "5 = x"],
    answer: "x = 5",
    explanation: "Variables must have the name on the left of '='."
  },
  {
    question: "Which data type is ['a','b','c']?",
    options: ["list", "tuple"],
    answer: "list",
    explanation: "Square brackets define a list."
  },
  {
    question: "What will print? print(len([1,2,3,4]))",
    options: ["4", "3"],
    answer: "4",
    explanation: "The list has 4 items, so len() is 4."
  },
  {
    question: "What does == compare?",
    options: ["Values", "Memory addresses"],
    answer: "Values",
    explanation: "== checks if two values are equal."
  },
  {
    question: "Which keyword exits a loop early?",
    options: ["break", "exit"],
    answer: "break",
    explanation: "break stops the loop immediately."
  },
  {
    question: "Which symbol is used for multiplication?",
    options: ["*", "x"],
    answer: "*",
    explanation: "In Python '*' means multiplication."
  },
  {
    question: "What will this print? print(bool(0))",
    options: ["False", "True"],
    answer: "False",
    explanation: "0 is considered False in Boolean context."
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["def", "func"],
    answer: "def",
    explanation: "'def' introduces a function definition."
  },
  {
    question: "What will print? print('py' + 'thon')",
    options: ["python", "py thon"],
    answer: "python",
    explanation: "The + operator concatenates without spaces."
  },
  {
    question: "What will be the result of 4 != 5?",
    options: ["True", "False"],
    answer: "True",
    explanation: "4 is not equal to 5, so != returns True."
  },
  {
    question: "Which logical operator means 'not'?",
    options: ["not", "!"],
    answer: "not",
    explanation: "Python uses 'not' for logical negation."
  },
  {
    question: "What will print? x = 3; print(x * 2)",
    options: ["6", "32"],
    answer: "6",
    explanation: "3 * 2 equals 6."
  },
  {
    question: "Which function converts a string to an integer?",
    options: ["int()", "str()"],
    answer: "int()",
    explanation: "int() converts strings or floats to integers."
  }
];


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
