import React from 'react'

export default function First(props) {
    return(

        <div className="index">

            <h1>

                Tenzies

            </h1>

            <h2>

                Select Difficult Level

            </h2>

            <button onClick={props.scr}>

                Easy

            </button>

            <button onClick={props.scr}>

                Medium

            </button>

            <button onClick={props.scr}>

                Hard

            </button>

        </div>

    )
}
