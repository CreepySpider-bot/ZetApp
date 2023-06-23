import React from 'react'
import "./About_body1.css";
function About_body1() {
  return (
    <div className='about_b1_upper'>
        <img src='about_b1_bg.webp' ></img>
        <div className='about_b1_text'>
            <text>OUR MISSION</text>
            <div style={{marginTop: 8}}>
              <text className='about_b1_text_1'>Enabling financial inclusion for the next billion Indians
                <br></br>
                & making their Zindagi Set. Building a platform that enables you to sell
                <br></br>
                financial products & earn up to Rs. 1 lakh every month.
              </text>
            </div>
            <div style={{marginTop: 8}}>
              <text className='about_b1_text_2'>EARN BETTER. LIVE BETTER.</text>
            </div>
        </div>
    </div>
  )
}

export default About_body1
