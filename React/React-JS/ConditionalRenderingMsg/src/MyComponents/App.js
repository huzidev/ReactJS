import React from 'react';

export default function App() {
    
    const[message, func] = React.useState(["a", "b"])
  
    function alert() {
        
    }

    return (

        <div>
            <h2>
                Alert!
            </h2>
            <h5>
                You've No Messages
            </h5>
        </div>

    )
}
