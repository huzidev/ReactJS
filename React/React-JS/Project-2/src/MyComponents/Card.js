import React from 'react';
import Slide from '../assets/slider';

export default function Card() {
  return (
      <div className="card">
        <img src={Slide} alt="Slide-1" />
        <div className="card-1">
            <i className="fa-solid fa-star"></i>
            <span>
                5.0
            </span>
            <span>
                (6) .
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
