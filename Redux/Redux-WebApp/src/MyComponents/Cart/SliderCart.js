import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/Cart-Store.js';
import ProductList from './ProductList.js'

export default function SliderCart() {
    const dispatch = useDispatch();

    const quantity = useSelector((state) => state.cart.len)

    const Products = ProductList.map((info) => {
        
        const {Id, name, price, img} = info

        function addToCart (){
            dispatch(cartActions.addToCart({
                Id,
                name,
                price,
                img
            }))
        }

        function test() {
            dispatch(cartActions.totalLen())
        }

        function decrementItems(){
            dispatch(cartActions.removeFromCart(Id))
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
                        <button onClick={decrementItems}>
                            -
                        </button>
                        <div className='num' onClick={test}>
                            quantity : {quantity}
                        </div>
                        <button onClick={addToCart}>
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
