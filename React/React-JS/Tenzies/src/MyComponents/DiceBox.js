import React from 'react';

export default function DiceBox(props) {

    function Merge() {
        
        props.Count()
        props.Roll()

    }

    return(
        
        <>
            <div className="easy medium hard">

                {/* Instead of creating 10 diff div for Dice we simply created a function above with LOOP */}
                {props.elements}

            </div>

            <button className="Roll" onClick={Merge}>

                {props.Tenzies ? "Play Again" : "Roll"}

            </button>
        </>

    )

}
