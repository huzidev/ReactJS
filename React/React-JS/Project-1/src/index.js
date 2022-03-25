import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './MyComponents/Nav'
import Header from './MyComponents/Header'
import Ul from './MyComponents/Ul'
import './styles/style.css'


function Main() {
    return(

        <div className="container">
            <Nav />
            <Header />
            <Ul />
        </div>

    )
}

ReactDOM.render(
    <Main />,
    document.getElementById("head")
)