import { createSlice } from "@reduxjs/toolkit";
import sliderImage from "../MyComponents/sliderImage";

const sliderStore = createSlice({

    name : 'slider',
    initialState : {
        sliderImage : [sliderImage.length],
        setActiveIndex : 0,
        len : sliderImage - 1,
        setActiveIndex : 0
    },
    reducers : {
           
    }
    
});

export const sliderStoreActions = sliderStore.actions;

export default sliderStore;