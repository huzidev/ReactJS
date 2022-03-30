import React from "react"

// it is not mandatory to write exact props (Property) rather we can use whatever name we like to make props BUT it is good practice to write props cause it is short form of (PROPERTY)

// by creating PROPS we can make ours components more and more reuseable as we did over there

// and props basically receive a javascript object

// now if for some reason i dont wanna print heading in the first contact so we can simply create an if else type condition

// NOW as in Loop condition we add && means make sure both conditions are true if both conditions are true than print or run else not therefore we've created same condition in JSX therefore we've to cover h3 in {} then check if props.heading && inside h3 props.heading is present then run only

//  OR

// in the other condition we says something like if props.text ? (? means does exist) then display block : (: means else or does not exist) then display none

// and we've also use {{}} double curly bracket one for jsx and other one is for object of JS

export default function Contact(props) {
   
    return (
        <div>
            {props.heading && <h3>
                Heading : {props.heading}
            </h3>}
            <p style={{display: props.text ? "block" : "none"}}>
                Text : {props.text}
            </p>
        </div>
    )

}