import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name : "cart",
    initialState : {

        itemsList : [], // because array can store multiple values
        totalQuantity : 0, // by default it should've to be zero
        showCart : false
    },
    reducers : {

        // addToCart will takes state and action so when user will click on addToCart the action will update accordingly

        addToCart(state, action) {

            const newItem = action.payload; // which is going to be according to user that how much time user clicked on addToCart

            // TO CHECK IF ANY ITEM IS ALREADY PRESENT mens if user wanted to purchase the same product MULTIPLE TIMES

            const existingItem = state.itemsList.find((item) => item.Id === newItem.Id)

            // means if we've laptop of dell with id 1 and user wanted to add same laptop once again then state.itemList.find() 
            // means to run like a loop to check the itemsList which is an array until we found item.id which is equals to 
            // newItem because user wanted to add same product once again

            if(existingItem){

                existingItem.quantity ++;

                existingItem.totalPrice += newItem.price;

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
            
            state.totalQuantity ++;

            // so no matter of any scenario the totalQuantity will be increase accordingly if cart is full or empty or if it just have single element

            // we've to use useSelector then Redux's state to update the totalQuantity with state.cart.totalQuantity

            }

        },

        removeFromCart(state, action) {

            const id = action.payload;

            const existingItem = state.itemsList.find((item) => item.id === id);

            // to check if item is already present so this means their will be more quantity hence we check with IF condition

            // if existingItem is present so we just have to DECREASE the quantity just not deleting the item completely

        },

        // for delete we use ID so to check if ID is equal to the ID of the element we wanted to delete and FIND function

        // we didn't provide ACTION in ours setShowCart because we only provide or use section when we wanted to update something

        // but in case of setShowCart we are not updating rather we are just changing the state

        setShowCart(state) {

            state.showCart = !state.showCart;

            // so each time we clicked on the cart button it'll change from false to true and vice versa 

            // because at the above we've provide showCart a (FALSE) value in the initialState object and here we've provided (!) so each time it'll be opposite on click

        }
    }

});

export const cartActions = cartSlice.actions;

export default cartSlice;