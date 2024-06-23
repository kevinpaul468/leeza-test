import React, { useState } from 'react';
import questions from '../lib/questions';
import UserInputForm from './UserInputForm'
import Toast from './Toast';


function Questionnaire() {
    const [answers, setAnswers] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [userInputComponentStatus, setUserInputComponentStatus] = useState(false);
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
        setUserInputComponentStatus(true);
        
    };

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };


    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = questions.slice(startIndex, endIndex);

    return (
        <div>
            { userInputComponentStatus && 
            
            <div>
            <div className='overlay'></div>
            <Toast
            
            message={
                <UserInputForm/>
            }
            
            
                        onClose={() => { setUserInputComponentStatus(false) }}

            onProceed={()=>{

                const name = document.getElementById("userName").value
                const email = document.getElementById("userEmail").value
                const phone = document.getElementById("userPhone").value

                console.log(name, email, phone)

            }}
            />
            
            </div>
            }

            <div className='flex flex-col items-center'>
                <h2 className='text-lg py-2'>Page {currentPage + 1} of {Math.ceil(questions.length / questionsPerPage)}</h2>
                <form onSubmit={handleSubmit} className='flex flex-col items-center w-screen'>
                    <div className='questions-container '>
                        {currentQuestions.map((question, index) => (
                            <div key={index} className="question">
                                <h2 className='text-2xl'>{question.question}</h2>
                                <div className="options grid grid-cols-2">
                                    {question.options.map((option, optionIndex) => (
                                        <label key={optionIndex} className='option'>
                                            <input
                                                className='radio-input'
                                                type="radio"
                                                name={`question-${startIndex + index}`}
                                                value={option.score}
                                                onChange={() => handleOptionChange(startIndex + index, option.score)}
                                                checked={answers[startIndex + index] === option.score}
                                            />
                                            {option.text}
                                            <div></div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-between w-1/2'>
                        <button
                            type="button"
                            disabled={currentPage === 0}
                            onClick={handlePrevClick}
                            className="disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        '
                        <button
                            type="button"
                            disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}
                            onClick={handleNextClick}
                            className="disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                    {currentPage === Math.ceil(questions.length / questionsPerPage) - 1
                        &&
                        <button type='submit' >Submit</button>
                    }
                </form>
            </div>
        </div>  
    );
}
export default Questionnaire;
