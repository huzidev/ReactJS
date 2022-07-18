import React from 'react';

export default function Arrow({prevSlide, nextSlide}) {
  return (
    <div className="arrows">
      <span className="prev arrow" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next arrow" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  )
};