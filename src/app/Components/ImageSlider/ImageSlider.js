"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"

function ImageSlider() {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
          <div className="card">
            <img src="Slider/Amex.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/Aufin.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/Axis.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/Bajaj.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/BOB.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/Icici.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/Idfc.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/IndusInd.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/StandardChartered.webp" alt=""></img>
          </div>
          <div className="card">
            <img src="Slider/Yesbank.webp" alt=""></img>
          </div>
        </Slider>
      </div>
  )
}

export default ImageSlider
