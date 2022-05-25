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
        }

    }
});

export const logInActions = logInStore.actions;

export default logInStore;