import React from 'react';

export default function Window() {

    const[Width, SetWidth] = React.useState(window.innerWidth) // and width is equal to window.innerwidth

    const[Height, SetHeight] = React.useState(window.innerHeight)

    React.useEffect(() => { // while using useEffect some time memory loss could occur and example of that is that if we click button and HIDES window width in UI then in console we'll face and error regarding memory leak therefore we've to use RemoveEventListener for this

        function WindowWidth() {

            SetWidth(window.innerWidth)


        }

        function WindowHeight() {

            SetHeight(window.innerHeight)


        }

        window.addEventListener("resize", WindowWidth) // event listener is used to add and event which will run every time ours window's width changes
        
        window.addEventListener("resize", WindowHeight)

        return function() {
            
            console.log("Memory Leak fix");

            window.removeEventListener("resize", WindowWidth)

            window.removeEventListener("resize", WindowHeight)

        }


    }, [])

    return (

        <div className="main">

            <h2>
                Window Width: {Width}
            </h2>

            <h2>
                Window Height: {Height}
            </h2>

        </div>
    
    )

}
