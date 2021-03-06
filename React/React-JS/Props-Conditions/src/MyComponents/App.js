import React from "react"
import Contact from "./Contact"


// now if for some reason i dont wanna print heading in the first contact so we can simply create an if else type condition

// like here we've remove heading part from the last three part of contact 

// and we've also remove text form the last one so we can check another condition

export default function App() {

    return (
        <div className="contacts">
            <Contact 
                heading="Hello, World!"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum architecto cum fugit?"
            />
            <Contact 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum architecto cum fugit?"
            />
            <Contact 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum architecto cum fugit?"
            />
            <Contact 
                heading="Hello, World!"
            />
        </div>
    )

}
