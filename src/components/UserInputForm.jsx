
function UserInputForm() {
    return (
        <div id="user-input-form" className="modal">
            <div className="flex flex-col items-center bg-green-300">
                <h2>User Information</h2>
                <form className="flex flex-col">
                    <label htmlFor="userName">Name:</label>
                    <input type="text" id="userName" name="userName" required />

                    <label htmlFor="userEmail">Email:</label>
                    <input type="email" id="userEmail" name="userEmail" required />

                    <label htmlFor="userPhone">Phone:</label>
                    <input type="phone" id="userPhone" name="userPhone" required />

                    <button type="button" id="submitUserForm">Submit</button>
                </form>
            </div>
        </div>
    );
}


export default UserInputForm;