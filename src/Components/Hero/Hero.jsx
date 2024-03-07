import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="left">
                <h2>New ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-ican">
                        <p>new</p>
                        <img src={handIcon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='latest-btn'>
                    <div>
                        Latest Collection
                    </div>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
            <div className="right">
                <img src={heroImage} alt="" />
            </div>
            
        </div>
    )
}

export default Hero
