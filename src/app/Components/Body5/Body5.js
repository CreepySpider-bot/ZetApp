"use client";
import { useEffect } from 'react';
import React from 'react'
import "./Body5.css"
import Aos from 'aos';
import "aos/dist/aos.css"
function Body5() {
    useEffect(() =>{
        Aos.init({duration:1000});
    },[] );
  return (
    <div className='b5_upper'>
      <img src='b5_bg_img.webp' className='b5_img'></img>

      <div className='b5_left' >
        <p className='b5_p1'>WHY <span style={{margin:0,color: "#145CC5",fontSize: 24,fontWeight: "bold"}}>Choose Us</span></p>
        <p className='b5_p2' style={{whiteSpace: "nowrap",margin:0}}>Why we are love by our customers</p>
        <img src='b5_img.webp' className='b5_man_img'></img>
      </div>

      <div data-aos="fade-up" className='b5_right'>
        {/* ----------------- */}
        <div className='b5_card'>
            <img src='b5_cards/1.svg'></img>
            <p className='b5_card_p1'>Zero Investment</p>
            <p className='b5_card_p2'>Build your business without any investment</p>
        </div>
        {/* ----------------- */}
        <div className='b5_card'>
            <img src='b5_cards/2.svg'></img>
            <p className='b5_card_p1'>Quick Payout</p>
            <p className='b5_card_p2'>Direct Payout in your bank account in short time</p>
        </div>
        {/* ----------------- */}
        <div className='b5_card'>
            <img src='b5_cards/3.svg'></img>
            <p className='b5_card_p1'>Limitless Earnings</p>
            <p className='b5_card_p2'>Direct Payout in your bank account in short time</p>
        </div>
        {/* ----------------- */}
        <div className='b5_card'>
            <img src='b5_cards/4.svg'></img>
            <p className='b5_card_p1'>Training & Upskilling</p>
            <p className='b5_card_p2'>Get trained by finance and sales experts</p>
        </div>
        {/* ----------------- */}
        <div className='b5_card'>
            <img src='b5_cards/5.svg'></img>
            <p className='b5_card_p1'>Customer Support</p>
            <p className='b5_card_p2'>Access tools and content to build relationship</p>
        </div>
        {/* ----------------- */}
        <div className='b5_card'>
            <img src='b5_cards/6.svg'></img>
            <p className='b5_card_p1'>Financial Products</p>
            <p className='b5_card_p2'>Trustworthy & high-rated products & categories</p>
        </div>

      </div>
    </div>
  )
}

export default Body5
