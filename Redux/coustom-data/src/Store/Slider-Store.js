import { createSlice } from "@reduxjs/toolkit";
import sliderImage from "../MyComponents/Slider/sliderImage.js";

const sliderStore = createSlice({

    name : 'slider',
    initialState : {
        sliderImage : [sliderImage.length],
        setActiveIndex : 0,
        activeIndex : 0,
        len : sliderImage - 1
    },
    reducers : {
           prevSlide(state, action){
            //    const next = action.payload;
            // return state.setActiveIndex = (state.activeIndex < 1 ? state.len : state.activeIndex - 1);
                // return action.payload < 1 ? state.len : action.payload
                // state.setActiveIndex = (state.activeIndex < 1 ? state.len : state.activeIndex - 1);
           },
           nextSlide(state, action){
                // const next = action.payload;
            // return state.setActiveIndex = (state.activeIndex === state.len ? 0 : state.activeIndex + 1);
                // state.setActiveIndex = (state.activeIndex === state.len ? 0 : state.activeIndex + 1);
                // return action.payload === state.len ? state.len : action.payload
           }
           
    }
    
});

export const sliderStoreActions = sliderStore.actions;

export default sliderStore;