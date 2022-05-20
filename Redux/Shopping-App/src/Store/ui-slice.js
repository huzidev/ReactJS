import { configureStore } from "@reduxjs/toolkit";

const uiSlice = createSlice({

    name : 'ui',
    initialState : {

        notification : null

    },
    reducers : {

        showNotification(state, action) {

            state.notification = {

                type : state.payload.type,
                message : state.payload.message,
                open : state.payload.open

            }

        }

    }

});

export const uiActions = uiSlice.actions;

export default uiSlice;