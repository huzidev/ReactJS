//REMEMBER while creating fucntions make sure to write the first word Capital of that fucntion
// why to use function is beacuse functions helps us to create different components so we can manipulate and design them seprately
function Fact() {
    // our function will (RETURN) whatever is written inside of it whenever the function is called
    return(

        <div>
            <header>
                <nav>
                    <h1>Reasons Why I Like To Code In React</h1>
                </nav>
            </header>
            <img src="/assets/react.png" alt="React-Logo"/>
            <ol>
                <li>It is really interesting</li>
                <li>It is highly demandable</li>
                <li>It has functions similar to JS, HTML</li>
                <li>It is really easy to learn</li>
                <li>It can help me to craete Single-Page Applications!</li>
            </ol>
            <footer>
                All Rights Are Reseverd &copy;
            </footer>
        </div>

    )
}

ReactDOM.render(
    // for rendering ours function we've to write them inside these brackets   
    <Fact />,
    document.getElementById("head")

)