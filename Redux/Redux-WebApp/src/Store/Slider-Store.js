import { createSlice } from "@reduxjs/toolkit";
import sliderImage from "../MyComponents/Slider/sliderImage";

const sliderStore = createSlice({

    name : 'slider',
    initialState : {
        sliderImage : [sliderImage.length],
        setActiveIndex : 0,
        len : sliderImage - 1,
    },
    reducers : {
           
    }
    
});

export const sliderStoreActions = sliderStore.actions;

export default sliderStore;