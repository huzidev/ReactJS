import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent.js";
import Dots from "./Dots.js";
import Arrows from "./Arrow.js";
import sliderImage from "./sliderImage.js";
import { useDispatch,useSelector } from "react-redux";
import { sliderStoreActions } from "../../Store/Slider-Store.js";

const len = sliderImage.length - 1;


export default function Slider() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  function prev() {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
  } 

  function next() {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
  }

  function active(activeIndex) {
    setActiveIndex(activeIndex)
  }
  return (
    <div className="slider-container">
      <SliderContent 
        activeIndex={activeIndex} 
        sliderImage={sliderImage} 
      />
      <Arrows
        prevSlide={prev}
        nextSlide={next}
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={active}
      />
    </div>
  );
}