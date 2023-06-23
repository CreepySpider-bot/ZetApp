"use client";
import { useEffect } from "react";
import React from 'react';
import "./Body3.css";
import Aos from 'aos';
import "aos/dist/aos.css"
function Body3() {
    useEffect(() =>{
        Aos.init({duration:1000});
    },[] );
  return (
    <div  className='b3_upper'>
      <div  className='b3_text'>
        <p className='b3_p1'>Products on ZET</p>
        <p className='b3_p2'>We are trusted by best brand in the country</p>
      </div>
      <div data-aos="fade-up" className='cards'>
        <div className="kard" >
            <div className='kkard'>
                <div className='card_img_upper'><img className='card_img' src='cards_img/1.webp'></img></div>
                <div>
                    <h2>CREDIT CARDS</h2>
                    <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
                </div>
            </div>
        </div>
        {/* ------------------------ */}
        <div className="kard">
            <div className='kkard kkard2'>
                <div className='card_img_upper'><img className='card_img' src='cards_img/2.webp'></img></div>
                <div>
                    <h2>LOANS</h2>
                    <p>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
                </div>
            </div>
        </div>
        {/* ------------------------ */}
        <div className="kard">
            <div className='kkard kkard3'>
                <div className='card_img_upper'><img className='card_img' src='cards_img/3.webp'></img></div>
                <div>
                    <h2>BUY NOW PAY LATER</h2>
                    <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
                </div>
            </div>
        </div>
        {/* ------------------------ */}
        <div className="kard">
            <div className='kkard kkard4'>
                <div className='card_img_upper'><img className='card_img' src='cards_img/4.webp'></img></div>
                <div>
                    <h2>SAVING ACCOUNTS</h2>
                    <p>ZET offers range of savings account that suits your personal needs for the banking.</p>
                </div>
            </div>
        </div>
      </div>
    <img src='stripes_left.svg' loading='lazy' width="341" height="452" className='left_stripe'></img>
    <img src='stripes_right.svg' loading='lazy' width="341" height="452" className='right_stripe'></img>
    </div>
  )
}

export default Body3
