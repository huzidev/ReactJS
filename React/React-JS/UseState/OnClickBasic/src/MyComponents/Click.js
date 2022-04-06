import React from 'react';

export default function Click(props) {
  return (

    <div className="Main">

          <div onClick={props.change} className="Button">

              <h1>

                  {props.val ? "Click" : "Click-Again"}

              </h1>

          </div>

      </div>

  )
}
