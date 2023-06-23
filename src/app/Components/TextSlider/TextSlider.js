"use client";
import React, { Component,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TextSlider.css"
import Progress from "./Progress";

function TextSlider () {

      const [state,setState] = useState({
        slideIndex: 0,
        updateCount: 0
      });
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        afterChange: () =>
        setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => setState({ slideIndex: next }),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
  return (
      <div>
        <Slider {...settings}>
          <div className="text_slide silde1">
            <h1>14 Lakh+ Financial Advisor across India are using ZET to increase thier income.</h1>
          </div>
          <div className="text_slide slide2">
            <h1>We helped customers in more than 50 cities to get thier first financial product</h1>
          </div>
          <div className="text_slide slide3">
            <h1>More than ₹20 CR earned by our Agents by selling Credit Cards and Loans</h1>
          </div>
        </Slider>
            <div className="progress_bar">
                <Progress index = {state.slideIndex}/>
            </div>
      </div>

  )
}

export default TextSlider
