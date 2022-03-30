import React from "react"

// it is not mandatory to write exact props (Property) rather we can use whatever name we like to make props BUT it is good practice to write props cause it is short form of (PROPERTY)

// by creating PROPS we can make ours components more and more reuseable as we did over there

// and props basically receive a javascript object

export default function Contact(props) {
   
    return (
        <div className="contact-card">

            <img src={props.img} alt="Img"/>

            <h3>{props.name}</h3>

            <div className="info-group">

                <p>{props.status}</p>

            </div>

            <div className="info-group">

                <p>{props.info}</p>

            </div>
        </div>
    )

}