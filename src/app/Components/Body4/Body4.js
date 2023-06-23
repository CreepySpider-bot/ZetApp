"use client";
import React, { useEffect } from 'react'
import "./Body4.css"
import TextSlider from '../TextSlider/TextSlider'

function Body4() {
    
  return (
    <div className='b4_upper'>
        <div className='b4_container'>
            <div className='img_container'>
                <img className='b4_img' src='b4img.webp'></img>
            </div>
            <div className='sliding_text_container'>
                <p className='b4_p'>THE ZET EFFECT</p>
                <div>
                    <TextSlider/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body4
