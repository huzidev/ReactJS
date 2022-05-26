import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({

    name : 'cart',
    initialState : {
        itemsList : [],
        totalQuantity : 0,
    },
    reducers : {
        addToCart() {
            
        }
    }
});

export const cartActions = cartStore.actions;

export default cartStore;