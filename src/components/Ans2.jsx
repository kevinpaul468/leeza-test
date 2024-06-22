import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import questions from '../lib/questions';

// const questions = [
//   // Include all question objects as in the original script
// ];

const scoringScale = [
  { range: [0, 69], result: 'No Autism' },
  { range: [70, 106], result: 'Level-1 (mild)' },
  { range: [107, 153], result: 'Level-2 (moderate)' },
  { range: [153, 181], result: 'Level-3 (Severe)' },
];

const Ans2 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [assessmentResult, setAssessmentResult] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const questionsPerPage = 5;

  useEffect(() => {
    renderQuestions(currentPage * questionsPerPage);
  }, [currentPage]);

  const renderQuestions = (startIndex) => {
    // Function to render questions
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    const existingAnswerIndex = newSelectedAnswers.findIndex(answer => answer.questionIndex === questionIndex);
    if (existingAnswerIndex !== -1) {
      newSelectedAnswers[existingAnswerIndex].optionIndex = optionIndex;
    } else {
      newSelectedAnswers.push({ questionIndex, optionIndex });
    }
    setSelectedAnswers(newSelectedAnswers);
  };

  const handlePrevClick = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length < questions.length) {
      alert('Please answer all questions.');
      return;
    }
    const score = calculateScore(selectedAnswers);
    setTotalScore(score);
    setAssessmentResult(getAssessmentResult(score));
    setShowForm(true);
  };

  const handleFormSubmit = (userName, userEmail, userPhone) => {
    setShowForm(false);
    sendUserDataToBackend(userName, userEmail, userPhone, totalScore);
    setShowModal(true);
  };

  const calculateScore = (selectedAnswers) => {
    let total = 0;
    for (const selectedAnswer of selectedAnswers) {
      const selectedOptionScore = questions[selectedAnswer.questionIndex].options[selectedAnswer.optionIndex].score;
      total += selectedOptionScore;
    }
    return total;
  };

  const getAssessmentResult = (score) => {
    for (const scaleItem of scoringScale) {
      const [minScore, maxScore] = scaleItem.range;
      if (score >= minScore && score <= maxScore) {
        return scaleItem.result;
      }
    }
  };

  const sendUserDataToBackend = (userName, userEmail, userPhone, score) => {
    const backendURL = 'https://leeza-app-backend-git-main-rahmath-001.vercel.app/register';

    fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, email: userEmail, phone: userPhone, score }),
    })
      .then(response => response.json())
      .then(data => console.log('User data sent to backend:', data))
      .catch(error => console.error('Error sending user data to backend:', error));
  };

  return (
    <div id="assessment-container" className="flex flex-col items-center p-4">
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <span className="text-gray-500 text-2xl font-bold cursor-pointer" onClick={() => setShowForm(false)}>&times;</span>
            <h2 className="text-2xl font-semibold mb-4">User Information</h2>
            <form id="userForm" onSubmit={e => {
              e.preventDefault();
              const userName = e.target.userName.value;
              const userEmail = e.target.userEmail.value;
              const userPhone = e.target.userPhone.value;
              handleFormSubmit(userName, userEmail, userPhone);
            }} className="space-y-4">
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name:</label>
                <input type="text" id="userName" name="userName" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="userPhone" className="block text-sm font-medium text-gray-700">Phone:</label>
                <input type="phone" id="userPhone" name="userPhone" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      )}
      {showModal && (
        <div id="myModal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <span className="text-gray-500 text-2xl font-bold cursor-pointer" onClick={() => setShowModal(false)}>&times;</span>
            <div id="modal-content">
              <p className="mb-4">Your child's assessment result is: {assessmentResult}. Score: {totalScore}</p>
              <p className="mb-4">If you would like to discuss the results with a doctor, you can book an appointment by clicking the button below:</p>
              <button id="bookAppointmentButton" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => window.open('https://cal.com/mohammed-ibrahim-raza-hgx3uq/autism-counseling', '_blank')}>Book Appointment</button>
            </div>
          </div>
        </div>
      )}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Autism Spectrum Disorder (ASD) Screening Tool</h1>
      </div>
      <div className="text-center mb-8">
        <p className="text-lg">This assessment helps you understand your child's developmental progress and whether further evaluation for autism spectrum disorder (ASD) might be necessary.</p>
        <p className="text-lg">Please answer each question with the option that best describes your child's behavior.</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" style={{ height: '60px', width: '160px', fontSize: '30px' }} onClick={() => document.getElementById('hidden-content').style.display = 'block'}>Proceed</button>
      <div id="hidden-content" className="w-full max-w-4xl mt-8" style={{ display: 'none' }}>
        <div className="text-center mb-4">
          <div className="text-lg font-semibold">Page {currentPage + 1} of {Math.ceil(questions.length / questionsPerPage)}</div>
        </div>
        <div className="quiz-container">
          {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question, questionIndex) => (
            <div className="mb-6" key={questionIndex}>
              <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
              <div className="flex flex-col">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className={`p-2 border rounded mb-2 cursor-pointer ${selectedAnswers.some(answer => answer.questionIndex === currentPage * questionsPerPage + questionIndex && answer.optionIndex === optionIndex) ? 'bg-blue-100 border-blue-500' : 'bg-gray-100 border-gray-300'}`}>
                    <input
                      className="mr-2"
                      type="radio"
                      name={`q${currentPage * questionsPerPage + questionIndex}`}
                      value={optionIndex}
                      onChange={() => handleOptionChange(currentPage * questionsPerPage + questionIndex, optionIndex)}
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mb-4">
          <button id="prev-button" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={handlePrevClick} disabled={currentPage === 0}>Previous</button>
          <button id="next-button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleNextClick} disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}>Next</button>
          {currentPage === Math.ceil(questions.length / questionsPerPage) - 1 && (
            <button id="submit-button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
          )}
        </div>
        <div id="result-container"></div>
      </div>
    </div>
  );
};

export default Ans2;
