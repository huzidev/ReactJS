import React from "react"

// it is not mandatory to write exact props (Property) rather we can use whatever name we like to make props BUT it is good practice to write props cause it is short form of (PROPERTY)

// by creating PROPS we can make ours components more and more reuseable as we did over there

// and props basically receive a javascript object

// now if for some reason i dont wanna print heading in the first contact so we can simply create an if else type condition

export default function Contact(props) {
   
    return (
        <div>
            {props.heading && <h3>
                Heading : {props.heading}
            </h3>}
            <p>
                Text : {props.text}
            </p>
        </div>
    )

}