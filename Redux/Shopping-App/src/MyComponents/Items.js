import React from 'react';
import products from './products';

// MAKE SURE TO MAKE SEPARATE COMPONENTS FOR YOURS PRODUCTS ITEMS
// while using map because else wise all the items will print separately according to the quantity of the data in products.js like here we've total 5 products lists in ours products.js if i make map method in app.js then pass the props and print it then it'll print all the 5 diff products list differently

export default function items() {

    const list = products.map((info) => {

        const {Id, name, imgURL} = info

        return(
           <div className='items'>
               <img src={`../assets/${imgURL}`} alt="items-img" />
               <h3>
                   {name}
               </h3>
               <p>
                   <b>
                       {Id}
                   </b>
               </p>
               <button>
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