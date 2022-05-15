import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    name : "auth",
    initialState : { isLoggedIn },
    reducers : {

        login(state) {

            state.isLoggedIn = true;

        },

        logOut(state) {

            state.isLoggedIn = false;

        }
    }

});