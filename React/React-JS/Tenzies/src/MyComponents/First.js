import React from 'react';

export default function First(props) {

    return(

        <div className="index">

            <h1>

                Tenzies

            </h1>

            <button onClick={props.play}>

                Play Game

            </button>

        </div>

    )
    
}
