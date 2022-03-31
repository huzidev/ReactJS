import React from "react"
// it is not mandatory to write exact props (Property) rather we can use whatever name we like to make props BUT it is good practice to write props cause it is short form of (PROPERTY)

// by creating PROPS we can make ours components more and more reuseable as we did over there

// and props basically receive a javascript object

// NOTE sometime if images fail to load then simply move yours image folder to public folder where HTML file is present because BY DEFAULT we've access to public folder therefore we've move ours assets folder to public now it'll works

export default function Contact(props) {
   
    return (
        <div className="contact">
            <img src={`../assets/${props.img}`} alt="Img"/>
            <h3>Tittle : {props.title}</h3>
            <div className="info">
                <p> <b> Description : </b> {props.des}</p>
                <p> <b> Experience : </b> {props.experience}</p>
                <p> <b> Stats-Languages : </b> {props.language}+</p>
                <p> <b> Stats-Fvrt-Languages : </b> {props.fvrt}</p>
                <p> <b> Source : </b> {props.source}</p>
                <p> <b> Hours : </b> {props.hours}+</p>
            </div>
        </div>
    )

}