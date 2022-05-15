import { configureStore, createSlice } from "@reduxjs/toolkit";

// instead of {createStore} we've configureStore in Redux-toolkit

// create-slice will take slice name and STATES AND REDUCERS as object for all the functions because REDUCERS is used for performing function

const counterSlice = createSlice({

    name : "counter",
    initialState : { counter : 0 },
    reducers : {

        increment(state, action) {

            state.counter ++;

        },

        decrement(state, action) {

            state.counter --;

        },

        addBy(state, action) {

            state.counter += action.payload;

            // since we don't have to define payload in app.js but we've to write it here
        
        }

    } 

    // we don't have to use RETURN for returning the functions

// inside REDUCERS we've function we wanted to use and we've to pass arguments or parameters like here we did is STATE and ACTION 
// here we've passed all the functions we wanted inside REDUCERS
})

export const actions = counterSlice.actions;

// counterSlice is the name of variable and counterSlice.actions is for performing actions of ours counters means to update it and to export and then to import these counterSlice k andar wale actions to ours app.js 

const store = configureStore({

    reducer : counterSlice.reducer
    // counterSlice is the name of variable so counterSlice.reducer means the reducer which is going to work for counterSlice

});

export default store;