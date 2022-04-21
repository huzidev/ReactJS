import React from 'react';

export default function Dice(props) {

    const styles = {

        backgroundColor: props.isHeld ? "#59E391" : "white"

    }

    return (

        <div className="Dice-box" style={styles}> 
        {/* (STYLE) is the property for styling (STYLES) is just variable name we've created above */}

            <h2 className="Dice">

                {props.value}

            </h2>

        </div>

    )

}
