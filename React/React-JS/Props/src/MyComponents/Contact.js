import React from "react"

export default function Contact(props) {
   
    return (
        <div className="contact-card">
            <img src={props.img} alt="Img"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </div>
    )
    
}