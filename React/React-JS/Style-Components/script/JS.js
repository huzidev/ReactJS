function Nav() {

    return(
        <nav>
            <img src="../assets/react.png" alt="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
            </ul>
        </nav>
    )

}


function Main() {
    return(
        <div>
            <Nav />
            <h1>Hello</h1>
        </div>
    )
}

ReactDOM.render(

    <Main />,
    document.getElementById("head")

)