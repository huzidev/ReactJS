import React from 'react';

export default function Info(props) {

    return(

        <p className="instructions">
                
            {
                props.Tenzies ? `Congratulations! You've Won The Game In Just ${props.Count} Moves`
                : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls"
            }
             
        </p>

    )
}
