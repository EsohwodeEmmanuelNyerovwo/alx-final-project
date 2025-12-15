import React, { useState } from 'react';

const shuffleArray = arr => [...arr].sort(() => Math.random() - 0.5);

const QuestionPage = ({ question, handleAnswer }) => {

    const [selected, setSelected] = useState(null);
    const answers = shuffleArray([...question.incorrect_answers, question.correct_answer]);

    const submitAnswer = (answer) => {
        setSelected(answer);
        handleAnswer(answer === question.correct_answer);
    };

    return (
        <div className="p-4 border bg-blue-950 rounded mb-4">
            <h3 className="text-xl text-white font-semibold mb-2" dangerouslySetInnerHTML={{ __html: question.question }} />
            <div className="flex flex-col gap-2">
                {answers.map(ans => (
                    <button
                        key={ans}
                        className={`px-4 py-2 rounded border ${selected === ans ? 'bg-green-200' : 'bg-white'}`}
                        onClick={() => submitAnswer(ans)}
                        dangerouslySetInnerHTML={{ __html: ans }}
                    />
                ))}
            </div>
        </div>
    )
}

export default QuestionPage