import React from 'react'

export default function Counter(props) {

    return (
        <div className="Counter">
            <button className="Minus" onClick={props.sub}>
                -
            </button>
            <div className="Count">
                <h1>
                    {props.count}
                </h1> 
            </div>
            <button className="Plus" onClick={props.add}>
                +
            </button>
        </div>
    )
    
}
