import { createSlice } from "@reduxjs/toolkit";

const loginStore = createSlice({

    name : 'login',
    initialState : {isLoggedIn : false}
    reducers : {

        function logIn(state) {
            isLoggedIn = true;
        },

        function logOut(state) {
            isLoggedIn = false;
        },

    }
});

export default loginStore;