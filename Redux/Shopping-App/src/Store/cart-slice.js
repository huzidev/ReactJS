import { createSlice} from "@reduxjs/toolkit";

const createSlice = createSlice({

    name : "Cart",
    initialState : {

        itemsList : [], // because array can store multiple values
        totalQuantity : 0, // by default it should've to be zero
        showCart : false
    },
    reducers : {

        // addToCart will takes state and action so when user will click on addToCart the action will update accordingly

        addToCar(state, action) {

            const newItem = action.payload; // which is going to be according to user that how much time user clicked on addToCart

        },

        removeFromCart() {},

        setShowCart(state) {

            state.showCart = true;

        }
    }

})