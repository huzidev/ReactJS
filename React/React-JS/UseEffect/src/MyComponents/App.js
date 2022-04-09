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

                Click
                
            </button>

            <Window />

        </div>

    )

}
