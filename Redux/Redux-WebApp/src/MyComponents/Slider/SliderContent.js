import React from 'react';
import sliderImage from './sliderImage.js'

export default function SliderContent({activeIndex}) {

  const slider = sliderImage.map((list, index) => {

    const {title, description, urls} = list;

      return (
        <section>
          <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={urls} alt="slider-img"/>
            <h2 className="slide-title">
              {title}
            </h2>
            <h3 className="slide-text">
              {description}
            </h3>
          </div>
      </section>
    )
  })
  return (
    <>
      {slider}
    </>
  )
};