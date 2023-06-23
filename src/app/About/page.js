import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import About_body1 from '../Components/About_body1/About_body1'
import About_body2 from '../Components/About_body2/About_body2';
import About_body3 from '../Components/About_body3/About_body3';
import About_body4 from '../Components/About_body4/About_body4';
import AboutFooter from '../Components/AboutFooter/AboutFooter';
import "./About.css";
function page() {
  return (
    <div style={{margin:0}}>
      <Navbar/>
      <About_body1/>
      <About_body2/>
      <About_body3/>
      <About_body4/>
      <AboutFooter/>
    </div>
  )
}

export default page
