import React from 'react'

export default function Counter(props) {
  return (
      <div className="Counter">
          <button className="Minus" onClick={Add}>
              -
          </button>
          <div className="Count">
              <h1>
                  {props.Count}
              </h1> 
          </div>
          <button className="Plus">
              +
          </button>
      </div>
  )
}
