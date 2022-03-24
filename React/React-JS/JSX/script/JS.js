//JSX (javascript syntax extension OR javascript XML)
// MAKE SURE in JSX we've to return only one parent OR wrap all the other elements in the single parent as we did below


const element = <h1 className="header">Hello, This Is JSX(Javascript XML)</h1>

ReactDOM.render(element, document.getElementById("head"))

ReactDOM.render(
    <div>
        <h1>Hello</h1>
        <p>Hello</p>
    </div>, 
    document.getElementById("root")
)

