import React from 'react';
import Auth from './Auth.js';
import Layout from './Layout.js';
import Notification from './Notification.js'
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData } from '../Store/cart-slice.js';
let isFirstRender = true;

export default function App() {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    
    const cart = useSelector((state) => state.cart);

    const notification = useSelector((state) => state.ui.notification); 
    
// the cart will help us to send the HTTPS request

// useSelector is used for have the access of REDUX-STORE and takes Redux-state as parameter and (State) is basically REDUX's state and auth is the name we've provided in ours REDUX STORE inside REDUCER and isLoggedIn is the action we wanted to update

// fetching the data from the backend files

    React.useEffect(() => {



    }, [])

    React.useEffect(() => {

    if (isFirstRender) {
        
        isFirstRender = false;
        return;
// so the notification will not shown at firstRender means as we enter the website the notification will only shown when call some actions
    }
        
    dispatch(sendCartData(cart));

// we've to use it in a DISPATCH because we are sending it to ours REDUX-STORE where we've used THUNK logic

    }, [cart, dispatch])

// IT IS MANDATORY TO CALL THE VARIABLE NAME LIKE HERE WE'VE CALLED sendRequest() else the DATA would not update on backend

// The await operator is used to wait for a Promise . It can only be used inside an async function just like a DELAY

// async/await syntax fits great with fetch() because it simplifies the work with promises

// promise basically represents the completion of an asynchronous operation

// .JSON should have to always be their because it helps us to add the collection their on backend files

// In dependency array we've passed [cart] so whenever (CART) changes data will fetch again

    return (
        <div>
            {notification && (
                <Notification type={notification.type} message={notification.message}/>
            )}
            
            {/* through Ternary operators */}

            {/* { isLoggedIn ? <Layout /> : <Auth />} */}

            { !isLoggedIn && <Auth />}

            {/* (!)isLoggedIn simply means false && <Auth /> only if isLoggedIn is false */}
            
            { isLoggedIn && <Layout />}
            
            {/* isLoggedIn simply means true && <Auth /> only if isLoggedIn is true */}
        </div>
    )
}