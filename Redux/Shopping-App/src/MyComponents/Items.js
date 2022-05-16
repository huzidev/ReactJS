import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cart-slice';
import products from './products';

// MAKE SURE TO MAKE SEPARATE COMPONENTS FOR YOURS PRODUCTS ITEMS
// while using map because else wise all the items will print separately according to the quantity of the data in products.js like here we've total 5 products lists in ours products.js if i make map method in app.js then pass the props and print it then it'll print all the 5 diff products list differently

export default function items() {

    // we've to compulsory use useDispatch because it will send ours functions to Redux-Store

    // const dispatch = useDispatch();

    // const addToCart = () => {

    //     dispatch(cartActions.addToCart({
    //         // SINCE we just have include newItem.id, name, price in ours Redux-Store for cartSlice and quantity and totalPrice 
    //         // are the state of ours Redux-Store not of ours components therefore we didn't passed it
    //         // these all are the payloads for ours products
    //         Id,
    //         name,
    //         price

    //     }))

    // }

    const list = products.map((info) => {

        const {Id, name, price, imgURL} = info

        const dispatch = useDispatch();

        const addToCart = () => {

            dispatch(cartActions.addToCart({
                // SINCE we just have include newItem.id, name, price in ours Redux-Store for cartSlice and quantity and totalPrice 
                // are the state of ours Redux-Store not of ours components therefore we didn't passed it
                // these all are the payloads for ours products
                Id,
                name,
                price

            }))

        }

        return(
           <div className='items'>
               <img src={`../assets/${imgURL}`} alt="items-img" />
               <h3>
                   {name}
               </h3>
               <p>
                   <b>
                       {price}
                   </b>
               </p>
               <button onClick={addToCart}>
                   Add To Cart
               </button>
           </div>
        )
    })

    return (
       <>
        {list}
       </>
    )
}