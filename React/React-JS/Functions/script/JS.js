//REMEMBER while creating fucntions make sure to write the first word Capital of that fucntion

function Fact() {
    // our function will (RETURN) whatever is written inside of it whenever the function is called
    return(

        <div>
            <h1>Reasons Why I Like To Code In React</h1>
            <ol>
                <li>It is really interesting</li>
                <li>It is highly demandable</li>
                <li>It has functions similar to JS, HTML</li>
                <li>It is really easy to learn</li>
                <li>It can help me to craete Single-Page Applications!</li>
            </ol>
        </div>

    )
}

ReactDOM.render(
    // for rendering ours function we've to write them inside these brackets   
    <Fact />,
    document.getElementById("head")

)