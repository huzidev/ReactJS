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

            // TO CHECK IF ANY ITEM IS ALREADY PRESENT mens if user wanted to purchase the same product MULTIPLE TIMES

            const existingItem = state.itemsList.find((item) => item.id === newItem.id)

            // means if we've laptop of dell with id 1 and user wanted to add same laptop once again then state.itemList.find() means to run like a loop to check the itemsList which is an array until we found item.id which is equals to newItem because user wanted to add same product once again

        },

        removeFromCart() {},

        setShowCart(state) {

            state.showCart = true;

        }
    }

})