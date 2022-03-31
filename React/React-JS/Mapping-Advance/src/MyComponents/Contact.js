import React from "react";
// it is not mandatory to write exact props.info (Property) rather we can use whatever name we like to make props.info BUT it is good practice to write props.info cause it is short form of (PROPERTY)

// by creating props.info we can make ours components more and more reuseable as we did over there

// and props.info basically receive a javascript object

// NOTE sometime if images fail to load then simply move yours image folder to public folder where HTML file is present because BY DEFAULT we've access to public folder therefore we've move ours assets folder to public now it'll works

export default function Contact(props) {

    // we created a variable called detail and we pass it in ours JSX in {detail} so ours badge will be updated according to the scenario

    // it is better to use === instead of == because === check conditions more thoroughly
   let detail

   if( props.info.Power === "Max" ){ // means if data says power is max then print Maximum in the badge
       detail = "Maximum"

   }

   else if( props.info.Power === "Not-Max" ){

       detail = "Not-Maximum"

   }

    return (
        <div className="contact">
            <div className="banner">
                {detail}
            </div>
            <img src={`../assets/${props.info.Img}`} alt="Img" className="card-img"/>
            <h3>Tittle : {props.info.title}</h3>
            <div>
                <p> <b> Description : </b> {props.info.description}</p>
                <p> <b> Experience : </b> {props.info.experience}</p>
                <p> <b> Stats-Languages : </b> {props.info.stats.Languages}+</p>
                <p> <b> Stats-Fvrt-Languages : </b> {props.info.stats.Favorites}</p>
                <p> <b> Source : </b> {props.info.Source}</p>
                <p> <b> Hours : </b> {props.info.HoursSpend}+</p>
            </div>
        </div>
    )

}