import { createSlice} from "@reduxjs/toolkit";

const createSlice = createSlice({

    name : "Cart",
    initialState : {

        itemsList : [], // because array can store multiple values
        totalQuantity : 0, // by default it should've to be zero

    }

})