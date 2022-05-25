import { createSlice } from "@reduxjs/toolkit";

const loginStore = createSlice({

    name : 'login',
    initialState : {isLoggedIn : false},
    reducers : {

        logIn(state) {
            state.isLoggedIn = true;
        },

        logOut(state) {
            state.isLoggedIn = false;
        },

    }
});

export default loginStore;