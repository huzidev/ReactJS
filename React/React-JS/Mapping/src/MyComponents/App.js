import React from "react";
import Data from "./data";
import Contact from "./Contact";

export default function App() {
    
   const cards = Data.map(info => {
       return(
           <Contact
                img = {info.coverImg}
                rating = {info.stats.rating}
                reviewCount= {info.stats.reviewCount}
                location = {info.location}
                title = {info.title}
                price = {info.price}
            />
       )
   })

    return (
        <div>
            {cards}
        </div>
    )

}
