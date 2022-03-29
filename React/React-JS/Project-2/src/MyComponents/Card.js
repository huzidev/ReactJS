import React from 'react';
import Slide from '../assets/slider.jpg';
import Slide1 from '../assets/slider2.webp';
import Slide2 from '../assets/slider3.jpg';

export default function Card() {
  return (
    <>
        <div className="card">
          <div className="wrap">
            <img src={Slide} className="card-img" alt="Slide-1" />
          </div>
          <div className="wrap">
            <img src={Slide1} className="card-img" alt="Slide-2" />
          </div>
          <div className="wrap">
            <img src={Slide2} className="card-img" alt="Slide-3" />
          </div>
        </div>
     </>
  )
}
