import React from 'react';
import Window from './Window';


export default function App() {

    const[Show, SetShow] = React.useState(true)

    function Toggle() {
        
        SetShow(PrevValue => !PrevValue)

    }

    return (
        
        <div className="container">

            <button onClick={Toggle}>

                {Show ? "Hide Windows Ratio" : "Show Windows Ratio"}

            </button>

            {/* means if show is true as well as <Window /> and <Window /> will be true but Show can be false as we've created toggle for opposite onClick */}

            {Show && <Window />} 

        </div>

    )

}
