import React from 'react';

const Toast = ({ message, onClose, onProceed }) => {
    return (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="flex-grow">
                <span>{message}</span>
            </div>
            <div className="flex space-x-2">
                <button 
                    onClick={onClose} 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    X
                </button>
                <button 
                    onClick={onProceed} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default Toast;
