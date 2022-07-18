import { createSlice } from "@reduxjs/toolkit";

const logInStore = createSlice({

    name : 'login',
    initialState : {
        isLoggedIn : false,
        setStateForUser : false,
        setStateForPassword : false
    },
    reducers : {

        logIn(state) {
            state.isLoggedIn = true;
        },

        logOut(state) {
            state.isLoggedIn = false;
        },

        user(state) {
            state.setStateForUser = true;
        },

        pass(state) {
            state.setStateForPassword = true;
        }
    }
});

export const logInActions = logInStore.actions;

export default logInStore;