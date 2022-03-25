import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './MyComponents/Nav'
import Header from './MyComponents/Header'
import './styles/style.css'


function Main() {
    return(

        <div className="container">
            <Nav />
            <Header />
        </div>

    )
}

ReactDOM.render(
    <Main />,
    document.getElementById("head")
)