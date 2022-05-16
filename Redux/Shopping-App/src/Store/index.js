import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

const store = configureStore({

// this REDUCER is ours STORES REDUCER and we'll create object of that REDUCER according to the names we've provided

    reducer : {

// here we've AUTH reducer for ours LOGIN page amd authSlice is imported from ours auth.js

        auth : authSlice.reducer,

        cart : cartSlice.reducer
    }

});

export default store;