import { configureStore, createSlice } from "@reduxjs/toolkit";

// instead of {createStore} we've configureStore in Redux-toolkit

// create-slice will take slice name and STATES AND REDUCERS as object for all the functions because REDUCERS is used for performing function

const counterSlice = createSlice({

    name : 'counter',
    initialState : { counter : 0 },
    reducers : {

        increment(state, action) {

        },

        decrement(state, action) {

        },

        addBy(state, action) {

        }

    } 

// inside REDUCERS we've function we wanted to use and we've to pass arguments or parameters like here we did is STATE and ACTION 
// here we've passed all the functions we wanted inside REDUCERS
})

export const actions = counterSlice.actions;