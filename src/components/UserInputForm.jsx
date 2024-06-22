import React from 'react';

function UserInputForm({ onSubmit, onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const userEmail = event.target.userEmail.value;
        const userPhone = event.target.userPhone.value;
        onSubmit(userName, userEmail, userPhone);
    };

    return (
        <div id="user-input-form" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <span className="text-gray-500 text-2xl font-bold cursor-pointer" onClick={onClose}>&times;</span>
                <h2 className="text-2xl font-semibold mb-4">User Information</h2>
                <form id="userForm" className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input 
                            type="text" 
                            id="userName" 
                            name="userName" 
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            id="userEmail" 
                            name="userEmail" 
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="userPhone" className="block text-sm font-medium text-gray-700">Phone:</label>
                        <input 
                            type="phone" 
                            id="userPhone" 
                            name="userPhone" 
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserInputForm;
