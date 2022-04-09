import React from 'react';

export default function Window() {

    const[Width, SetWidth] = React.useState(window.innerWidth)

    return (

        <div className="main">

            <h2>
                Winodw Width: 
            </h2>

            {/* <h2>
                Window Height:
            </h2> */}

        </div>
    
    )

}
