import React from 'react';
import Click from './Click';

export default function App() {

    const[Value, Function] = React.useState(true)

    function Changing() {
        
        Function(PrevValue => !PrevValue)

    }

  return (

      <Click />

  )
}
