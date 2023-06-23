"use client"
import React from 'react'
import "./About_body4.css"
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
function About_body4() {
  useEffect(() =>{
    Aos.init({duration:1000});
  },[] );
  return (
    <div className='ab_b4'>
      <div className='ab_b4_1'>
        <p className='ab_b4_1p1'>Meet our Founders</p>
        <p className='ab_b4_1p2'>Few words from founders desk</p>
      </div>
      <div  data-aos="fade-up" className='ab_b4_2'>
        {/* ------------- */}
        <div className='founder_1'>
          <div >
            <img src='Aboutpage/Manish.webp' style={{width: "90%"}}></img>
            <div className='f1_text'>
              <div>
                <p className='f_name'> Manish Shara</p>
                <p className='f_desc'>Co- Founder & CEO</p>
              </div>
              <div><img src='Aboutpage/LinkedIn.webp' style={{width:"50%",paddingTop:20}}></img></div>
            </div>
          </div>
        </div>
        {/* ------------- */}
        <div className='founder_1'>
          <div >
            <img src='Aboutpage/Yash.webp' style={{width: "90%"}}></img>
            <div className='f1_text'>
              <div>
                <p className='f_name'>Yash Desai</p>
                <p className='f_desc'>Co- Founder</p>
              </div>
              <div><img src='Aboutpage/LinkedIn.webp' style={{width:"50%",paddingTop:20}}></img></div>
            </div>
          </div>
        </div>
        {/* ------------- */}
        <div className='founder_1'>
          <div >
            <img src='Aboutpage/Lokesh.webp' style={{width: "90%"}}></img>
            <div className='f1_text'>
              <div>
                <p className='f_name'>Lokesh Agarwal</p>
                <p className='f_desc'>CTO</p>
              </div>
              <div><img src='Aboutpage/LinkedIn.webp' style={{width:"50%",paddingTop:20}}></img></div>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  )
}

export default About_body4
