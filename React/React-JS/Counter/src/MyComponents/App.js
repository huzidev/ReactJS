import React from 'react';
import Counter from './Counter';

export default function App() {

    const [Count, SetCount] = React.useState(0); // 0 is the by default value or BEGINNING value

    function Add() {

        SetCount(PrevCount => {
        
            return PrevCount + 1

        })

    }

    function Sub() {
        
        SetCount(PrevCount => {

            return PrevCount - 1

        })

    }
    
  return (
      <Counter add={Add} sub={Sub} count={Count}/>
  )
}
