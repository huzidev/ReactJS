import React from 'react';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../Store/ui-slice.js';

export default function Notification({type, message}) {

    const dispatch = useDispatch();

    const notification = useSelector((state) => state.ui.notification);

    const handleClose = () => {

        dispatch(uiActions.showNotification({

            open : false
// because when we wanted to close notification we simply will change the state of open to FALSE
        }))

    }
    
    return (
        <div>
            {/* so whenever the notification.open state is true show the notification with its severity type */}
            {notification.open && (
            <Alert onClose={handleClose} severity={type}>
                {message}
            </Alert>
            )}
        </div>
    )
//The severity of the alert. This defines the color and icon used according to type 

// the types can be "SUCCESS" "ERROR" the color and icon will be according to type and message should be according to the type
};
