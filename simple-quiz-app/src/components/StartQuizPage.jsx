import React, { useState, useEffect } from 'react'
import { fetchCategories } from '../Api/triviaApi';

const StartQuizPage = ({ startQuiz }) => {
    const [categories, setCategories] = useState([]);
    const [cate, setCate] = useState(9);
    const [diff, setDiff] = useState('medium');
    const [total, setTotal] = useState(10);

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);
    return (
        <div className="border p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Quiz</h2>
            <div className="flex flex-col gap-2">
                <label>Category:</label>
                <select value={cate} onChange={e => setCate(e.target.value)}>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>

                <label>Difficulty:</label>
                <select value={diff} onChange={e => setDiff(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label>Number of Questions:</label>
                <input type="number" min={1} max={50} value={total} onChange={e => setTotal(e.target.value)} />

                <button
                    className="mt-4 px-4 py-2 bg-blue-950 text-white rounded"
                    onClick={() => startQuiz({ cate, diff, total })}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
}

export default StartQuizPage