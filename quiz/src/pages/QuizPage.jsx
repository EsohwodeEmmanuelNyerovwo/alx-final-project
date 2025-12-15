import React from 'react'
import { fetchQuestions } from '../quiz-api/triviaApi';
import StartQuizPage from '../components/StartQuizPage';
import Scores from '../components/Scores';
import QuestionPage from '../components/QuestionPage';
import { useState } from 'react';

const QuizPage = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    const startQuiz = async (settings) => {
        const data = await fetchQuestions(settings.total, settings.cate, settings.diff);
        setQuestions(data);
        setQuizStarted(true);
        setScore(0);
        setCurrentIndex(0);
    };
    const handleAnswer = (correct) => {
        if (correct) setScore(prev => prev + 1);
        setCurrentIndex(prev => prev + 1);
    };

    const restartQuiz = () => setQuizStarted(false);

    if (!quizStarted) return <StartQuizPage startQuiz={startQuiz} />;

    if (currentIndex >= questions.length) {
        return <Scores score={score} total={questions.length} restartQuiz={restartQuiz} />;
    }

    return <QuestionPage question={questions[currentIndex]} handleAnswer={handleAnswer} />;
};

export default QuizPage