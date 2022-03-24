//JSX (javascript syntax extension OR javascript XML)
// MAKE SURE in JSX we've to return only one parent OR wrap all the other elements in the single parent as we did below


const element = <h1 className="header">Hello, This Is JSX(Javascript XML)</h1>

ReactDOM.render(
    element, 
    document.getElementById("head")
)


const main = (
    // their there is one main parent wrapping 2 diff components
    <div> 
        <h1>Hello, World</h1>
        <p>I'm learning ReactJS!</p>
    </div>
)


ReactDOM.render(
    // we've created a OBJECT called (MAIN)
    main,
    document.getElementById("mid")
)


ReactDOM.render(
    // their div is ours main parent which is actually wrapping two other components h1 and para
    // THEREFORE we are not VIOLATING the rule of JSX that we've to return only sigle parent
    <div> 
        <h1>Hello</h1>
        <p>Hello</p>
    </div>, 
    document.getElementById("root")
)

