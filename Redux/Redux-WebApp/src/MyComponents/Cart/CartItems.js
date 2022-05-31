import { CardActions } from '@mui/material';
import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/Cart-Store.js';
import YoursCart from './YoursCart.js';

export default function CartItems() {

    const CartItems = useSelector((state) => state.cart.itemsList)
    const screen = useSelector((state) => state.cart.screen);

    const quantity = useSelector((state) => state.cart.totalQuantity)

    // let item;

    // const {Id, name, price, quantity, total} = item;

    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(cartActions.goBack())
    }
    function deleteAll() {
        dispatch(cartActions.deleteAll())

        // let confirmAction = window.confirm("You Sure");

        // if (confirmAction) {
        //     alert("success")
        // }
        // else{
        //     alert("failure")
        // }
    }
    
    let show;

    if(quantity === 0){
        show = false;
    }
    else if(quantity > 0){
        show = true;
    }

    return (
        <div className='cart-main'>
            <div className='top-nav'>
            <h2>
                Yours Cart
            </h2>
            <div className='logout'>
                <i className='fa fa-arrow-left' onClick={logoutHandler}>
                </i>
                <p onClick={logoutHandler}>
                    Go Back To Shopping
                </p>
            </div>
            </div>
            {show ?
                <>
                    <div className='cart-nav'>
                        <h5>
                            Items-Name
                        </h5>
                        <h5>
                            Price
                        </h5>
                        <h5>
                            Quantity
                        </h5>
                        <h5>
                            Total Price
                        </h5>
                    </div>
                    <ul>
                        {
                            CartItems.map((item) => (
                                <>
                                    <li>
                                        <YoursCart
                                            Id = {item.Id}
                                            name = {item.name}
                                            price = {item.price}
                                            quantity = {item.quantity}
                                            total = {item.totalPrice}
                                            img = {item.img}
                                        />
                                    </li>
                                    <hr />
                                </>
                            ))
                        }
                    <button onClick={deleteAll} className='delete-btn'>
                        Clear Cart
                    </button>
                    </ul>
                </> : (
                    <div className='center'> 
                        <h2>
                            Cart Is Empty! <br />
                            Go Buy Something
                        </h2>
                    </div>
                )
            }
            <>
                {screen ? 
                <div className='modal'>
                    <p>
                        Are You Sure You Wanted To Remove All Cart Items?
                    </p>
                    <button>
                        Yes
                    </button>
                    <button>
                        No
                    </button>
                </div>
                : ""
                }
            </> 
        </div>
    )
}
