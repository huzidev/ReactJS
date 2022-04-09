import React from 'react';

export default function Window() {
    
    var width = window.innerWidth

    const[Width, SetWidth] = React.useState(width) // and width is equal to window.innerwidth

    React.useEffect(() => {

        function WindowWidth() {

            SetWidth(width)


        }

        window.addEventListener("resize", WindowWidth) // event listener is used to add and event which will run every time ours window's width changes 



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
