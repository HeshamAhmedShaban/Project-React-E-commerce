import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe To Our Newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
