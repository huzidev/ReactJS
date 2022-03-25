import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './MyComponents/Nav'
import './styles/style.css'


function Main() {
    return(

        <div>
            <Nav />
        </div>

    )
}

ReactDOM.render(
    <Main />,
    document.getElementById("head")
)