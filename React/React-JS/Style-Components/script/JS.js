function Nav() {

    return(
        <nav>
            <img src="../assets/react.png" alt="React-Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
            </ul>
        </nav>
    )

}

function Head() {

    return(
        <header>
            <h1>ReactJS</h1>
        </header>
    )

}

function Ul() {

    return(
        <div className="items">
            <h1>
                Things About React!
            </h1>
            <ul>
                <li>Really Interesting</li>
                <li>Really Easy</li>
                <li>Similar To JS, HTML</li>
                <li>East To Learn</li>
                <li>East to Code</li>
            </ul>
        </div>
    )

}

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
            <Head />
            <Ul />
            <Footer />
        </div>
    )
}

ReactDOM.render(

    <Main />,
    document.getElementById("head")

)