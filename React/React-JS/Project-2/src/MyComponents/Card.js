import React from 'react';
import Slide from '../assets/slider';

export default function Card() {
  return (
      <div className="card">
          <img src={Slide} alt="Slide-1" />
          <div className="card-1">
          <i className="fa-solid fa-star"></i>
          </div>
      </div>
  )
}
