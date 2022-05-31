import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent.js";
import Dots from "./Dots.js";
import Arrows from "./Arrow.js";
import sliderImage from "./sliderImage.js";
import { useDispatch,useSelector } from "react-redux";
import { sliderStoreActions } from "../../Store/Slider-Store.js";

const len = sliderImage.length - 1;


export default function Slider() {

  // const activeImg = useSelector((state) => state.slider.activeIndex)

  const dispatch = useDispatch();

  const[activeIndex, setActiveIndex] = React.useState(0)

  // const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      dispatch(sliderStoreActions.nextSlide({
        len,
        setActiveIndex
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, dispatch]);

  function prev() {
    // setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
    dispatch(sliderStoreActions.prevSlide({
      len,
      setActiveIndex
    }));
  } 

  function next() {
    // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    dispatch(sliderStoreActions.nextSlide({
      len,
      setActiveIndex
    }));
  }

  function active(activeIndex) {
    // setActiveIndex(activeIndex)
    dispatch(sliderStoreActions.activeIndex(activeIndex));
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