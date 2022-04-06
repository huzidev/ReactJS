import React from 'react';
import Data from './Data';
import Info from './Info';

export default function App() {

    const JokeElements = Data.map(info => {

        return (
            <Info
                key={info.id}
                
            />
        )

    })

  return (
  )
}
