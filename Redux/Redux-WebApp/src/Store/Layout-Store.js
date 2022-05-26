import { createSlice } from "@reduxjs/toolkit";

const layoutStore = createSlice({

    name : 'layout',
    initialState : {
        hamburgerOpen : false
    },
    reducers : {

        open(state) {
            state.hamburgerOpen = true;
        } 
    }


});

export const layoutActions = layoutStore.actions;

export default layoutStore;