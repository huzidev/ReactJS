import React from 'react';
import Main from './Main';
import Navbar from './Navbar';

export default function App() {

    const[DarkMode, SetDarkMode] = React.useState(false)

    function ToggleDarkMode() {
        
        SetDarkMode(PrevMode => !PrevMode)

    }

    return (

        <div>

            <Navbar toggleDarkMode={ToggleDarkMode} darkMode={DarkMode}/>
            <Main darkMode={DarkMode}/>

        </div>

    )

}
