import React from 'react';

export default function App() {

    const[Value, Function] = React.useState(True)

    function Changing() {
        
        Function(PrevValue => !PrevValue)

    }
  return (

      <div className="Main">

          <div className="Button">

              <h1>

                  {Value ? "Click" : "Click-Again"}

              </h1>
              
          </div>

      </div>

  )
}
