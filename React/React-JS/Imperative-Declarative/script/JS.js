
const h1 = document.createElement("h1")
h1.textContent = "Hello, This Is Imperative Way!"
h1.className = "header"
document.getElementById("root").append(h1)


ReactDOM.render(<h1>Hello, This Is Declarative Way!</h1>, document.getElementById("head"))