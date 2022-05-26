import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({

    name : 'cart',
    initialState : {
        itemsList : [],
        totalQuantity : 0,
    }

})