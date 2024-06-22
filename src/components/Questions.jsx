import React, { useState } from 'react';
import questions from '../lib/questions';
import UserInputForm from './UserInputForm';

function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const questionsPerPage = 5;

  const handleOptionChange = (questionIndex, score) => {
    setAnswers({
      ...answers,
      [questionIndex]: score,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(true);  // Show user input form on submit
  };

  const handleFormSubmit = (userName, userEmail, userPhone) => {
    setShowForm(false);
    sendUserDataToBackend(userName, userEmail, userPhone, answers);
    setShowModal(true);
  };

  const sendUserDataToBackend = (userName, userEmail, userPhone, answers) => {
    const backendURL = 'https://leeza-app-backend-git-main-rahmath-001.vercel.app/register';

    fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, email: userEmail, phone: userPhone, answers }),
    })
      .then(response => response.json())
      .then(data => console.log('User data sent to backend:', data))
      .catch(error => console.error('Error sending user data to backend:', error));
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
    <div className='flex flex-col items-center p-4'>
      {showForm && <UserInputForm onSubmit={handleFormSubmit} onClose={() => setShowForm(false)} />}
      <h2 className='text-xl font-semibold mb-4'>
        Page {currentPage + 1} / {Math.ceil(questions.length / questionsPerPage)}
      </h2>
      <form onSubmit={handleSubmit} className='w-full max-w-xl'>
        {currentQuestions.map((question, index) => (
          <div key={index} className='mb-6'>
            <h2 className='text-2xl font-semibold mb-2'>{question.question}</h2>
            <div className='flex flex-col'>
              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className={`p-2 border rounded mb-2 cursor-pointer ${
                    answers[startIndex + index] === option.score ? 'bg-blue-100 border-blue-500' : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  <input
                    className='mr-2'
                    type='radio'
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
        <div className='flex justify-between mb-4'>
          {currentPage > 0 && (
            <button
              type='button'
              onClick={handlePrevClick}
              className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
            >
              Previous
            </button>
          )}
          {currentPage < Math.ceil(questions.length / questionsPerPage) - 1 && (
            <button
              type='button'
              onClick={handleNextClick}
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
              Next
            </button>
          )}
        </div>
        {currentPage === Math.ceil(questions.length / questionsPerPage) - 1 && (
          <div className="flex justify-center items-center">

          <button
            type='submit'
            className='bg-green-500 text-white py-2 rounded my-5  px-10 hover:bg-green-600'
            >
            Submit
          </button>
              </div>
        )}
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <span className="text-gray-500 text-2xl font-bold cursor-pointer" onClick={() => setShowModal(false)}>&times;</span>
            <div>
              <p className="mb-4">Your answers have been submitted. Thank you!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Questionnaire;
