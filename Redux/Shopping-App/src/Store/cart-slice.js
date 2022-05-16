import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

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

            const existingItem = state.itemsList.find((item) => item.Id === newItem.Id)

            // means if we've laptop of dell with id 1 and user wanted to add same laptop once again then state.itemList.find() 
            // means to run like a loop to check the itemsList which is an array until we found item.id which is equals to 
            // newItem because user wanted to add same product once again

            if(existingItem){

                existingItem.quantity ++;

                existingItem.price += newItem.price;

            }

            // if the itemsList is empty

            else{

                state.itemsList.push({

                    Id : newItem.Id, // so ours carts will update the id according to newItem's id

                    price : newItem.price,

                    quantity : 1, // quantity must be 1 in else condition because if there is no item then on adding an item the quantity will be 1 if there is already an item then we'll jump on the (existingItem) case
                    totalPrice : newItem.price,

                    name : newItem.name
                })

            }

        },

        removeFromCart() {},

        setShowCart(state) {

            state.showCart = true;

        }
    }

});

export const cartActions = cartSlice.actions;

export default cartSlice;