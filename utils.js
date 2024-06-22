import axios from "axios";


const sendUserDataToBackend = async () => {
    const backendURL = "https://leeza-app-backend-git-main-rahmath-001.vercel.app/register";
    try {
        const response = await axios.post(backendURL, {
            username: userName,
            email: userEmail,
            phone: userPhone,
            score: totalScore,
        });
        console.log("User data sent to backend:", response.data);
    }
    catch (error) {
        console.error("Error sending user data to backend:", error);
    }

}


export { sendUserDataToBackend };