import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './MyComponents/Nav';
import Header from './MyComponents/Header';
import Ul from './MyComponents/Ul';




function Footer() {

    return(
        <footer>
            All Rights Are Reserved 2021-22 &copy;
        </footer>
    )

}
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