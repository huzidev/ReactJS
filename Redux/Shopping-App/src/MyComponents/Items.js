import React from 'react';
import products from './products';

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