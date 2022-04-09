import React from 'react';

export default function Window() {
    
    var width = window.innerWidth

    const[Width, SetWidth] = React.useState(width)

    React.useEffect(() => {

        function WindowWidth() {

            SetWidth(window.innerWidth)
            
        }


    })

    return (

        <div className="main">

            <h2>
                Winodw Width: {width}
            </h2>

            {/* <h2>
                Window Height:
            </h2> */}

        </div>
    
    )

}
