import React from 'react';
import Slide from '../assets/slider.jpg';
import Slide1 from '../assets/slider2.webp';
import Slide2 from '../assets/slider3.jpg';

export default function Card() {
  return (
      <div className="card">
        <img src={Slide} className="card-img" alt="Slide-1" />
        <div className="card-1">
            <span className="color">
                5.0
            </span>
            <span className="color">
                Japan
            </span>
        </div>
        <p>
            Kakarot
        </p>
        <p>
            Latest Update - <span className="bold"> Ultra Instinct </span>
        </p>
        <img src={Slide1} className="card-img" alt="Slide-2" />
        <div className="card-1">
            <span className="color">
                5.0
            </span>
            <span className="color">
                Japan
            </span>
        </div>
        <p>
            Vegeta
        </p>
        <p>
            Latest Update - <span className="bold"> Super-Saiyan-Blue </span>
        </p>
        <img src={Slide2} className="card-img" alt="Slide-3" />
        <div className="card-1">
            <span className="color">
                5.0
            </span>
            <span className="color">
                Japan
            </span>
        </div>
        <p>
            Vegeta
        </p>
        <p>
            Latest Update - <span className="bold"> Super-Saiyan-Blue </span>
        </p>
      </div>
  )
}
