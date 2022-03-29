import React from 'react';
import Slide from '../assets/slider.jpg';

export default function Card() {
  return (
      <div className="card">
        <img src={Slide} className="card-img" alt="Slide-1" />
        <div className="card-1">
            <span className="grey">
                5.0
            </span>
            <span className="grey">
                Japan
            </span>
        </div>
        <p>
            Kakarot
        </p>
        <p>
            Latest Update - <span className="bold"> Ultra Instinct </span>
        </p>
      </div>
  )
}
