// Export so we can export it from their and import it at main (PARENT) file


export default function Nav() {

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