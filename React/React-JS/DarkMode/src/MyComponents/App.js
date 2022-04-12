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
            {/* not always to put parameter value like here we created prevmode as custom parameter and we can't always pass this custom variable in props like here we passed DarkMode which is value part of useState */}
            <Navbar darkMode={DarkMode} toggleDarkMode={ToggleDarkMode}/>
            <Main darkMode={DarkMode}/>

        </div>

    )

}
