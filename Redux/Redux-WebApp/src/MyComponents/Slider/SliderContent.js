import React from 'react';
import sliderImage from './sliderImage.js'

export default function SliderContent({activeIndex}) {

// the [] array we've created is having multiple data and INDEX starts from 0, 1, 2, 3...
// the index is basically the slider number
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