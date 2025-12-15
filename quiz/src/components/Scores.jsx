import React from 'react'

const Scores = ({ score, total, restartQuiz }) => {
    return (
        <div className="p-4 text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-lg my-2">Your Score: {score} / {total}</p>
            <button className="px-4 py-2 bg-blue-950 text-white rounded" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Scores