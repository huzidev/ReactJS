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

export const authActions = authSlice.actions;

// so we can export all the ACTIONS of variable called authSlice to ours main REDUX-STORE

export default authSlice;