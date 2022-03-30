import React from "react"


// we can use destructuring props rather than props in destructuring props we've to use {} than props name we use like there img, name etc 

// but it is better to use props rather than destructuring props

export default function Contact({img, name, status, info, bold}) {
   
    return (
        <div className="contact-card">

            <img src={img} alt="Img"/>

            <h3>{name}</h3>

            <div className="info-group">

                <p>{status}</p>

            </div>

            <div className="info-group">

                <p>{info} <b>{bold}</b></p>
                
            </div>
        </div>
    )

}