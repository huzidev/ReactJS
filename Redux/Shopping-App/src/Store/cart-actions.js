import { uiActions } from "./ui-slice";

// THUNK method for logics

// we use THUNK so we can have ours logic, data and all actionCreators inside REDUX-STORE

export const fetchData = () => {

    return async (dispatch) => {

        const fetchHandler = () => {
// since we are just getting http request from backend therefore we don't have to use METHOD(PUT) AND BODY because we are not sending
            const response = await fetch('https://redux-http-7c1de-default-rtdb.firebaseio.com/cartItems.json');
            const data = await response.json();
        }

    }
    
}

export const sendCartData = (cart) => { // for thunk their will be an parameter in this case it will be cart

    // and it'll return another function which will take DISPATCH as parameter 
    
        return async (dispatch) => {
    
    // FOR SENDING REQUEST
            
            dispatch(uiActions.showNotification({
    
                open : true,
                type : 'warning',
                message : 'Sending Request'
    
            }));
    
        const sendRequest = async () => {
    
            const response = await fetch('https://redux-http-7c1de-default-rtdb.firebaseio.com/cartItems.json', {
    
                method : "PUT", // PUT is just the name of ours request name
                body : JSON.stringify(cart)
    
            })
    
            const data = await response.json();
    
            // SEND STATE AS REQUEST SUCCESSFULLY
    
            dispatch(uiActions.showNotification({
    
                open : true,
                type : 'success',
                message : 'Data Send To Database Successfully'
    
            }))
    
    // this (DATA) variable is basically used when ours RESPONSE fetched from server it converts ours RESPONSE into json FORMAT 
    
        };
        try{
    
            await sendRequest();
    
        }
        catch (error){
    
            dispatch(uiActions.showNotification({
    
                open : true,
                type : 'error',
                message : 'Sending Request Failed'
    
            }))
    
        }
        };
    }