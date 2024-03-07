
import React from 'react'
import './Auth.css'
const Auth = () => {
    return (
        <div className='auth'>
            <div className="auth-container">
                <h1>Sign Up</h1>
                <div className="auth-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Your Password' />
                </div>
                <button>Sign Up</button>
                <p className='auth-login'>Already have an account? <span>Log In</span></p>
                <div className="auth-agree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Auth
