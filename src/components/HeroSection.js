import React from 'react'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video1.mp4" autoPlay loop muted />
            <h1>DRESSIFY</h1>
            <pre>L O C K  Y O U R  L O O K. </pre>        
        </div>
    )
}

export default HeroSection
