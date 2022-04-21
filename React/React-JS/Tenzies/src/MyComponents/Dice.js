import React from 'react';

export default function Dice(props) {

    const styles = {

        backgroundColor: props.isHeld ? "#59E391" : "white"

    }

    return (

        <div onClick={styles} className="Dice-box">

            <h2 className="Dice">

                {props.value}

            </h2>

        </div>

    )

}
