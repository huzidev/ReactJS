import React from 'react';

export default function App() {
    
    const[message, func] = React.useState(["a", "b"])

    return (

        <div>
            { 
                message.length === 0 ? // means if length of messages if 0 means there is no message available
                <h5>
                    You've No Messages
                </h5> 
                : // else
                <div>
                    <h2>
                        Alert!
                    </h2>
                    <h5> 
                        {/* MEANS if message.length is 1 just one MESSAGE else MESSAGES */}
                        You've {message.length} Unread {message.length === 1 ? "Message" : "Messages"}
                    </h5>
                </div>
            }
        </div>

    )
}
