"use client"
import React from 'react'
import { useEffect } from 'react';
import "./About_body3.css";
import Aos from 'aos';
import "aos/dist/aos.css"
function About_body3() {
  useEffect(() =>{
    Aos.init({duration:1000});
  },[] );
  return (
    <div>
    <div className='ab_b3'>
      <div className='ab_b3_1'><p>Got Featured</p></div>
      <div className='ab_b3_2'>
        <div><img src='Aboutpage/EconomicTimes.webp'></img></div>
        <div><img src='Aboutpage/Inc42.webp'></img></div>
        <div><img src='Aboutpage/mint.webp'></img></div>
        <div><img src='Aboutpage/YourStory.webp'></img></div>
        <div><img src='Aboutpage/BusinessStandard.webp'></img></div>
      </div>
    </div>


    <div className='ab_b3'>
      <div className='ab_b3_1'><p>Meet the Investors</p></div>
      <div data-aos="fade-up" className='ab_b3_3'>
        <div><img  src='Aboutpage/InvCompany1.webp' ></img></div>
        <div><img  src='Aboutpage/InvCompany2.webp' ></img></div>
        <div><img  src='Aboutpage/InvCompany3.webp' ></img></div>
        <div><img  src='Aboutpage/InvCompany4.webp'></img></div>
      </div>
      <div className='ab_b3_3'>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv1.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Kunal Shah</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>Founder, CRED</text>
        </div>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv2.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Gaurav Munjal</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>Founder, UNACADEMY</text>
        </div>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv3.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Aakrit Vaish</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>Co-Founder, HAPTIK</text>
        </div >
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv4.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Harshil Mathur</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>Founder, RAZORPAY</text>
        </div>
      </div>
      <div className='ab_b3_3'>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv5.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Vidit Aatrey</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>Founder & CEO, MEESHO</text>
        </div>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv6.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Amrish Rau</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>CEO, PINELABS</text>
        </div>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv7.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Lalit Keshre</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>CEO, GROWW</text>
        </div>
        {/* ---------------------- */}
        <div className='abc'>
          <img src='Aboutpage/Inv8.webp'></img>
          <p style={{fontSize:18,color: "rgb(47,52,64)", paddingTop:10}}>Gokul Rajaram</p>
          <text style={{fontSize:16,color: "rgb(134, 145, 168)",paddingTop:5}}>Product, DOORDASH</text>
        </div>
      </div>
    </div>
    

    </div>
  )
}

export default About_body3
