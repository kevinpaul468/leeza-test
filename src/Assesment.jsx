
import React, { useState , useEffect, useRef} from 'react';
import Toast from './components/Toast';
import UserInputForm from './components/UserInputForm';
import Questions from './components/Questions';

function Assessment() {
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleProceedToast = () => {
    // Add your proceed action logic here
    console.log('Proceed button clicked');
    setShowToast(false);
    
  
  };



  return (
    <div className="App">
      {showToast && (
        <Toast
          message={
            <div>This assessment helps you understand your child's developmental  progress and whether further evaluation for autism spectrum disorder (ASD) might be necessary.
              <br />
              Please answer each question with the option that best describes your child's behavior
            </div>}
          onClose={handleCloseToast}
          onProceed={handleProceedToast}
        />)}

        <Questions/>
        {/* <UserInputForm /> */}
      

    </div>
  );
}


export default Assessment;


