import React from 'react';

export default function Info(props) {

    const [IsShow, Func] = React.useState(false)

    function Toggle() {
    
        Func(PrevValue => !PrevValue)

    }

    return (

        <div className="main">

            <h3>
                {props.setup}
            </h3>

            <p>
                {props.punchline}
            </p>
            
            <button>
                PunchLine
            </button>

            <hr />
        </div>

    )

}
