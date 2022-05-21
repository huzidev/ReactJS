import React from 'react';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Notification({type, message}) {

    const notification = useSelector((state) => state.ui.notification);

    return (
        <div>
            {/* so whenever the notification.open state is true show the notification with its severity type */}
            {notification && <Alert severity={type}>
                {message}
            </Alert>}
        </div>
    )
//The severity of the alert. This defines the color and icon used according to type 

// the types can be "SUCCESS" "ERROR" the color and icon will be according to type and message should be according to the type
}
