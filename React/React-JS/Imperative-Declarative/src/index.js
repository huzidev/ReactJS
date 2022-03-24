// IMPERATIVE way is describe below in which we've to tell or specify every single thing
import React from 'react'   
import ReactDOM  from 'react-dom'

const h1 = document.createElement("h1")
h1.textContent = "This Is Imperative Way Of Writing React!"
h1.className = "header"
document.getElementById("root").append(h1) // append means add (MEANS) add h1 to the id called root because we create h1 in JS not Through HTML


// THIS IS DECLARATIVE WAY AND REACT BASICALLY WORKS ON DECLARATIVE WAY IN WHICH WE DON'T HAVE TO SPECIFY EVERY SINGLE THING RATHER COMPUTER WILL REALIZE WHAT TO DO AND HOW TO DO

ReactDOM.render(<h1 className="head">Hello, This Is Declarative Way Of Writing React!</h1>, document.getElementById("head"))