import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent.js";
import Dots from "./Dots.js";
import Arrows from "./Arrow.js";
import sliderImage from "./sliderImage.js";
import { useSelector, useDispatch } from "react-redux";
import { sliderStoreActions } from "../Store/Slider-Store.js";

const len = sliderImage.length - 1;


export default function Slider() {

  const test = useSelector((state) => state.slider.len);

  const dispatch = useDispatch();

  console.log(dispatch(sliderStoreActions.prevSlide()));
  console.log(test);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}