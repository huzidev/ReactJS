import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/Cart-Store.js';
import YoursCart from './YoursCart.js';
import Bottom from '../Bottom.js';

export default function CartItems() {

    const CartItems = useSelector((state) => state.cart.itemsList)
    let screen = useSelector((state) => state.cart.screen);
    const quantity = useSelector((state) => state.cart.totalQuantity)

    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(cartActions.goBack())
    }

    function deleteAll() {
        dispatch(cartActions.deleteAll());
    }
    
    function confirm() {
        dispatch(cartActions.yes())
    }

    function notConfirm() {
        dispatch(cartActions.no())
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
                    <hr />
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
                    <Bottom />
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
                    <div className='modal-container'>
                        <div className='modal'>
                            <p>
                                Are You Sure You Wanted To Remove All Cart Items?
                            </p>
                            <div className='modal-btns'>
                                <button onClick={confirm}>
                                    Yes
                                </button>
                                <button onClick={notConfirm}>
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                : ""
                }
            </> 
        </div>
    )
}
