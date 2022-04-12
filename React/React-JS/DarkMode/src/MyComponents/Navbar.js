import React from "react";

export default function Navbar(props) {

    return (
        // means on toggle if condition is true then the class will be changed to dark else their will be no class just default values 
         <nav className={props.darkMode ? "dark" : ""}> 

            <img className="nav--logo_icon" src="../assets/react.png" alt="React-Logo"/>

            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div className="toggler">
                
                <p className="toggler--light">Light</p>

                <div className="toggler--slider" onClick={props.toggleDarkMode}>

                    <div className="toggler--slider--circle"></div>

                </div>

                <p className="toggler--dark">Dark</p>

            </div>
            
        </nav>
    )

}