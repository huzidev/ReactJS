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

            <button onClick={props.easy}>

                Easy

            </button>

            <button onClick={props.medium}>

                Medium

            </button>

            <button onClick={props.hard}>

                Hard

            </button>

        </div>

    )
}
