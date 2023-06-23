import React from 'react'
import "./About_body2.css";
function About_body2() {
  return (
    <div>
    <div
    style={{backgroundColor: "white", textAlign: "center", marginTop: 48, paddingBottom:24}}
    >
      <text style={{fontSize:40, color: "rgb(47,52,64)", fontWeight:700}}>How we evolved over the years</text>
        <div style={{width:"100%", overflowX:"scroll"}}>
            <img src='Aboutpage/Growth.webp'
                style={{color:"transparent", height: "auto", width:"80%", marginTop:76}}
            ></img>
        </div>
    </div>

    </div>
  )
}

export default About_body2
