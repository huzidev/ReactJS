import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/Cart-Store.js';
import ProductList from './ProductList.js'

export default function SliderCart() {
    const dispatch = useDispatch();

    const Products = ProductList.map((info) => {
        
        const {Id, name, price, img} = info

        function addToCart (){
            dispatch(cartActions.addToCart({
                Id,
                name,
                price   
            }))
        }

        function removeFromCart(){
            dispatch(cartActions.removeFromCart())
        }
            
        return (
            <div key={Id}>
                <div className='cart-products'>
                    <img src={`../../mapImages/${img}`} alt="item-img"/>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        <b>
                            $ {price}
                        </b>
                    </p>
                    <div className='add-cart'> 
                        <button>
                            -
                        </button>
                        <div className='num'>
                            quantity :
                        </div>
                        <button>
                            +
                        </button>
                    </div>
                    <button onClick={addToCart}>
                        Add To Cart
                    </button>
                </div>
            </div>
        )

    })

    return(
        <>
            {Products}
        </>
    )
};
