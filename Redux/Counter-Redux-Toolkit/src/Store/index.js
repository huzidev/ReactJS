import { configureStore, createSlice } from "@reduxjs/toolkit";

// instead of {createStore} we've configureStore in Redux-toolkit

// create-slice will take slice name and STATES AND REDUCERS as object for all the functions because REDUCERS is used for performing function

const counterSlice = createSlice({

    name : 'counter',
    initialState = 

})