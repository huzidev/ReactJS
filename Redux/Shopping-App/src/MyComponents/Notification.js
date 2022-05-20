import React from 'react';
import { Alert } from '@mui/material';

export default function Notification({type, message}) {
    return (
        <div>
            <Alert severity={type}>
                {message}
            </Alert>
        </div>
    )
//The severity of the alert. This defines the color and icon used according to type 

// the types can be "SUCCESS" "ERROR" the color and icon will be according to type and message should be according to the type
}
