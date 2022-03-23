// render means start or to print on to the screen we use this documentgebID because this is used so we can tell ours code that where we wanted to add h1 and here root is like ours container for complete screen

// REACTDOM is a global variable

// will render (print, play) h1 inside div called (ROOT)

ReactDOM.render(<h1>Hello, World</h1>, document.getElementById("root"))

// remeber we select documnet.gebID so we can tell that where we wanted to add ours paragraph

ReactDOM.render(<p>Hello, This Is ReactJS</p>, document.getElementById("para"))

ReactDOM.render(<ul>
    <li>1</li>
    <li>2</li>
</ul>,)
