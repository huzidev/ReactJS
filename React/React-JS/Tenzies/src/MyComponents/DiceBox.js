import React from 'react';

export default function DiceBox(props) {

    return(
        
        <>
            <div className="Dice-container">

                {/* Instead of creating 10 diff div for Dice we simply created a function above with LOOP */}
                {props.elements}

            </div>

            <button className="Roll" onClick={props.merge}>

                {props.Tenzies ? "Play Again" : "Roll"}

            </button>
        </>

    )

}
