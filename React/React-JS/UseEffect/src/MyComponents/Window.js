import React from 'react';

export default function Window() {
    
    var width = window.innerWidth

    const[Width, SetWidth] = React.useState(width) // and width is equal to window.innerwidth

    React.useEffect(() => {

        function WindowWidth() {

            SetWidth(width)


        }

        window.addEventListener("resize", WindowWidth)



    })

    return (

        <div className="main">

            <h2>
                Winodw Width: {Width}
            </h2>

            {/* <h2>
                Window Height:
            </h2> */}

        </div>
    
    )

}
