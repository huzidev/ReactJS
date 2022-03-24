//REMEMBER while creating fucntions make sure to write the first word Capital of that fucntion

// why to use function is beacuse functions helps us to create different components so we can manipulate and design them seprately

// BASICALLY ours function is like (REACT COMPONENTS) and we write JSX inside ours function which ULTIMATELY (RETURN) javascript object and that js object is convert into DOM elements which can be seen by user after RENDER CALLED USER INTERFACE (UI)


// why did we create this components specifically for header is beacuse this is the concept of COMPONENTS means if I wanted to make some changes in the Header I can do it easily 

function Head() {

    return(
        <header>
            <nav>
                <h1>Reasons Why I Like To Code In React</h1>
            </nav>
        </header>
    )

}


function Fact() {
    // our function will (RETURN) whatever is written inside of it whenever the function is called
    return(

        <div>
            <Head />
            <img src="/assets/react.png" alt="React-Logo"/>
            <ol>
                <li>It is really interesting</li>
                <li>It is highly demandable</li>
                <li>It has functions similar to JS, HTML</li>
                <li>It is really easy to learn</li>
                <li>It can help me to craete Single-Page Applications!</li>
            </ol>
            <footer>
                All Rights Are Reseverd 2021-22 &copy;
            </footer>
        </div>

    )
}

ReactDOM.render(
    // for rendering ours function we've to write them inside these brackets
    <Fact />,
    document.getElementById("head")

)