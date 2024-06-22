// src/Toast.jsx
import React from 'react';
import './Toast.css'; // Optional: for styling

const Toast = ({ message, onClose, onProceed }) => {
    return (
        <div className="toast">
            <div className="toast-content">
                <span>{message}</span>
                <div className="toast-buttons">
                    <button onClick={onClose}>X</button>
                    <button onClick={onProceed}>Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default Toast;
