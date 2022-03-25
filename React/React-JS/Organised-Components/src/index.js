import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './MyComponents/Nav';
import Header from './MyComponents/Header';
import Ul from './MyComponents/Ul';
import Footer from './MyComponents/Footer';
import './style.css';
// it is better to use import css here rather to use linked css file in HTML

function Main() {
    return(
        <div>
            <Nav />
            <Header />
            <Ul />
            <Footer />
        </div>
    )
}

ReactDOM.render(

    <Main />,
    document.getElementById("head")

)