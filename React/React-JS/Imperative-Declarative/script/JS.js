// imperative is the way in which we've to specify every single thing like below
const h1 = document.createElement("h1")
h1.textContent = "Hello, This Is Imperative Way!"
h1.className = "header"
document.getElementById("root").append(h1) // apend meana add and we added h1 to div with id ROOT


// declarative is the way in which computer will know what to do and how to do and REACT is declarative

ReactDOM.render(<h1 className="head">Hello, This Is Declarative Way!</h1>, document.getElementById("head"))