import React from 'react';

export default function Window() {
    
    var width = window.innerWidth

    const[Width, SetWidth] = React.useState(width) // and width is equal to window.innerwidth

    React.useEffect(() => { // while using useEffect some time memory loss could occur and example of that is that if we click button and HIDES window width in UI then in console we'll face and error regarding memory leak therefore we've to use RemoveEventListener for this

        function WindowWidth() {

            SetWidth(width)


        }

        window.addEventListener("resize", WindowWidth) // event listener is used to add and event which will run every time ours window's width changes
        
        return function() {
            
            window.removeEventListener("resize", WindowWidth)

        }


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
