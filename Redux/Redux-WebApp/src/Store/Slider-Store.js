import { createSlice } from "@reduxjs/toolkit";
import sliderImage from "../MyComponents/Slider/sliderImage";

const sliderStore = createSlice({

    name : 'slider',
    initialState : {
        sliderImage : [sliderImage.length],
        setActiveIndex : 0,
        activeIndex = 0,
        len : sliderImage - 1
    },
    reducers : {
           prevSlide(state){
            state.setActiveIndex = (state.activeIndex < 1 ? len : state.activeIndex - 1);
           },
           nextSlide(state){
            state.setActiveIndex = (state.activeIndex === len ? 0 : state.activeIndex + 1); 
           }
    }
    
});

export const sliderStoreActions = sliderStore.actions;

export default sliderStore;