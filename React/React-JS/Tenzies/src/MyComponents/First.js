import React from 'react';

export default function First(props) {

    return(

        <div className="index">

            <h1 className="heading">

                Tenzies

            </h1>

            <button className="Roll" onClick={props.play}>

                Easy

            </button>

            <button className="Roll" onClick={props.play}>

                Medium

            </button>

        </div>

    )
    
}
