import React from 'react';

export default function Info(props) {

    const [IsShow, Func] = React.useState(false)

    function Toggle() {
    
        Func(PrevValue => !PrevValue) // each time we click it'll became opposite of what it used to be

    }

    return (

        <div className="main">

            {
                props.setup && // it is mandatory to use it suppose if user didn't insert SETUP part
                <h3>
                    {props.setup}
                </h3>
            }

            { 
                IsShow && // each time we click the button we toggle it, it'll eventually hide or shown the punchline because we've created a function called toggle and their PrevValue will receive and update the value of IsShow
                <p>
                    {props.punchline}
                </p>
            }
            
            <button onClick={Toggle} className="btn">

                {IsShow ? "Hide" : "Show" } PunchLine

            </button>

            <hr />
        </div>

    )

}
