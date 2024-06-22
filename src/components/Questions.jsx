import React, { useState } from 'react';
import questions from '../lib/questions';

function Questionnaire() {
    const [answers, setAnswers] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 5;

    const handleOptionChange = (questionIndex, score) => {
        setAnswers({
            ...answers,
            [questionIndex]: score,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Answers:', answers);
        // Here you can also send the answers to a backend server via an API call
    };

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    // Calculate the slice of questions to display
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = questions.slice(startIndex, endIndex);

    return (
        <div className='flex flex-col items-center'>
            <h2>page {currentPage + 1}/ {Math.ceil(questions.length / questionsPerPage)}</h2>
            <form onSubmit={handleSubmit} className='questions-container '>
                {currentQuestions.map((question, index) => (
                    <div key={index} className="question">
                        <h2 className='text-2xl'>{question.question}</h2>
                        <div className="options">
                            {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className='bg-slate-200'>
                                    <input
                                        
                                        type="radio"
                                        name={`question-${startIndex + index}`}
                                        value={option.score}
                                        onChange={() => handleOptionChange(startIndex + index, option.score)}
                                        checked={answers[startIndex + index] === option.score}
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <div>
                    {currentPage > 0 && <button type="button" onClick={handlePrevClick}>Previous</button>}
                    {currentPage < Math.ceil(questions.length / questionsPerPage) - 1 && <button type="button" onClick={handleNextClick}>Next</button>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Questionnaire;