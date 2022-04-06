import React from 'react';

export default function Click(props) {
  return (

    <div className="Main">

          <div onClick={Changing} className="Button">

              <h1>

                  {Value ? "Click" : "Click-Again"}

              </h1>

          </div>

      </div>

  )
}
