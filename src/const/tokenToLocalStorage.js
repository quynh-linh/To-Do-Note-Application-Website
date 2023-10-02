// Function to save the token to Local Storage with an expiration time of 30 minutes
const saveTokenToLocalStorage = (token) => {
    // Expiry time 30 minutes (30 * 60 * 1000 milliseconds)
    const expirationTime = new Date().getTime() + 30 * 60 * 1000; 
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime);
};

//Function to check if the token has expired
const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    var isCheck = false;
    if (token && tokenExpiration) {
        const currentTime = new Date().getTime();
        // Check if the current time is greater than the expiration time
        if (currentTime > parseInt(tokenExpiration)) {
            // Token has expired, handle logout or ask user to log in again
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            isCheck = false;
        } else {
            // The token is still valid
            isCheck = true;
        }
    } else {
        // If there is no token or expiration time in Local Storage, handle the logout or require the user to log in
        isCheck = false;
    }
    return isCheck;
};

export {saveTokenToLocalStorage,checkTokenExpiration};