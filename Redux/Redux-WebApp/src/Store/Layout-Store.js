import { createSlice } from "@reduxjs/toolkit";

const layoutStore = createSlice({

    name : 'layout',
    initialState : {
        hamburgerOpen : false,
        logout: false
    },
    reducers : {

        open(state) {
            state.hamburgerOpen = !state.hamburgerOpen;
        },

        goBack(state) {

            state.logout = !state.logout;

        }
    }


});

export const layoutActions = layoutStore.actions;

export default layoutStore;