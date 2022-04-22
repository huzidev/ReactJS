import React from 'react'

export default function Info() {

    return(

        <p className="instructions">
                
            {
                Tenzies ? `Congratulations! You've Won The Game In Just ${Counter} Moves`
                : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls"
            }
                
        </p>

    )
}
