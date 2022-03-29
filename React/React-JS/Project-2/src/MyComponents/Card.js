import React from 'react';
import Slide from '../assets/slider.jpg';

export default function Card() {
  return (
      <div className="card">
        <img src={Slide} className="card-img" alt="Slide-1" />
        <div className="card-1">
            <span>
                5.0
            </span>
            <span>
                Japan
            </span>
            <p>
                Kakarot
            </p>
            <p>
                Latest Update - Ultra Instinct
            </p>
        </div>
      </div>
  )
}
