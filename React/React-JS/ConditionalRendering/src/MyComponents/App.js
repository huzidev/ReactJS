import React from 'react';
import Data from './Data';
import Info from './Info';

export default function App() {

    const InfoElements = Data.map(info => { // DATA file contains all the data of user's or required data we are mapping it so it'll became self-sustaining and we don't have to update it every time whenever user insert more data

        return (

            <Info
                key={info.id}
                setup={info.setup}
                punchline={info.punchline}   
            />
            
        )

    })

  return (

      <div>

        {InfoElements}

      </div>
  )
  
}
