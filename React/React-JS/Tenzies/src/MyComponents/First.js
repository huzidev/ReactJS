import React from 'react';

export default function First(props) {

    return(

        <div className="index">

            <h1 className="heading">

                Tenzies

            </h1>

            <button className="Roll" onClick={props.play}>

                Play Game

            </button>

        </div>

    )
    
}
