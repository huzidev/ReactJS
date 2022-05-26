import { createSlice } from "@reduxjs/toolkit";

const layoutStore = createSlice({

    name : 'layout',
    initialState : {
        hamburgerOpen : false
    },
    reducers : {

        open(state) {
            state.hamburgerOpen = !state.hamburgerOpen;
        } 
    }


});

export const layoutActions = layoutStore.actions;

export default layoutStore;