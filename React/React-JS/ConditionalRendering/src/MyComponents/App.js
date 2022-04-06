import React from 'react';
import Data from './Data';
import Info from './Info';

export default function App() {

    const InfoElements = Data.map(user => { // DATA file contains all the data of user's or required data we are mapping it so it'll became self-sustaining and we don't have to update it every time whenever user insert more data

        return (

            // INFO is file name where we'll write ours JSX  
            <Info 
                key={user.id} 
                setup={user.setup} // setup is props name which will be used in INFO file for rendering
                punchline={user.punchline}  // user is the parameter which will receive all the data from DATA file
            />
            
        )

    })

  return (

      <div>

        {InfoElements}

      </div>
  )
  
}
