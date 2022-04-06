import React from 'react';

export default function Info(props) {

    const [IsShow, Func] = React.useState(false)

    function Toggle() {
    
        Func(PrevValue => !PrevValue)

    }

    return (

        <div className="main">

            {
                props.setup &&
                <h3>
                    {props.setup}
                </h3>
            }

            { 
                IsShow &&
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
