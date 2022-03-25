import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './MyComponents/Nav';
import Header from './MyComponents/Header';
import Ul from './MyComponents/Ul';
import Footer from './MyComponents/Footer';



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