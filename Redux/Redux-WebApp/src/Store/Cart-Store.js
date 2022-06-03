import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({

    name : 'cart',
    initialState : {
        itemsList : [],
        totalQuantity : 0,
        setShowCart : false,
        display : false,
        screen : false,
        yes : false,
        no : false,
        len : 0
    },
    reducers : {
        addToCart(state, action) {
            
            const newItem = action.payload;

            const existingItem = state.itemsList.find((item) => item.Id === newItem.Id);

            if (existingItem) {
                existingItem.quantity ++;
                existingItem.totalPrice += newItem.price;
            }
            else{
                state.itemsList.push({
                    Id : newItem.Id,
                    name : newItem.name,
                    price : newItem.price,
                    img : newItem.img,
                    totalPrice : newItem.price,
                    quantity : 1
                })
                state.totalQuantity ++;
            }
        },

        removeFromCart(state, action){

            const Id = action.payload;

            const existingItem = state.itemsList.find((item) => item.Id === Id);

            if (existingItem.quantity === 1) {

                state.itemsList = state.itemsList.filter((item) => item.Id !== Id);

                state.totalQuantity --;
            }
            else{
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price;
            }

        },

        setShowCart(state){

            state.setShowCart = !state.setShowCart;

        },

        delFromCart(state, action) {

            const Id = action.payload;

            const existingItem = state.itemsList.find((item) => item.Id === Id);

            if (existingItem.quantity > 0) {
                
                state.itemsList = state.itemsList.filter((item) => item.Id !== Id);

                existingItem.quantity = 0;
                
                existingItem.totalPrice = 0;

                state.totalQuantity --;

            }

        },

        deleteAll(state) {

            state.screen = !state.screen;

        },

        yes(state) {

            state.yes = !state.yes

            if(state.yes === true){

                state.itemsList = [];
                state.totalQuantity = 0;
                state.totalPrice = 0;
                state.screen = !state.screen;
                state.yes = !state.yes
            }  
            
        },

        no(state){

            state.no = !state.no

            if (state.no === true) {
                state.screen = !state.screen;
                state.no = !state.no
            }

        },
        goBack(state) {
            
            state.setShowCart = false;
            
        },

        display(state) {

            state.display = !state.display;

        },

        totalLen(state) {

            state.totalQuantity += state.totalQuantity;

        }
    }
});

export const cartActions = cartStore.actions;

export default cartStore;