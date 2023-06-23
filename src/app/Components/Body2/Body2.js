import React from 'react'
import "./Body2.css";
import ImageSlider from '../ImageSlider/ImageSlider';
function Body2() {
  return (
    <div className='b2_upper'>
      <div className='b2_text'>
        <p className='p1'>Top Brands on ZET</p>
        <p className='p2'>We are trusted by best brand in the country</p>
      </div>
      <div className='slide'>
        <ImageSlider/>
      </div>
    </div>
  )
}

export default Body2
