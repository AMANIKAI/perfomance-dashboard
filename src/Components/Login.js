import React from "react"


function Login() {
    return (
        <>
            <div className="container">
                <h1>Login to Dashboard</h1>
                <form id="loginForm">
                    <label for="username">Username or Email:</label>
                    <input type="text" id="username" required/>
                   
                    <label for="password">Password:</label>
                    <input type="password" id="password" required/>

                    <label for="password">Select Role:</label>
                    <input type="Dropdown-menu" id="password" required/>

                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <a href="https://www.safaricom.co.ke/">User Sign Up</a></p>
                <p>Don't have an account? <a href="https://www.safaricom.co.ke/">Admin Sign Up</a></p>
            </div>
        
        </> 
    )
};

export default Login