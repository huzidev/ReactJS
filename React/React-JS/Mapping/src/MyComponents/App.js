import React from "react";
import Data from "./data";
import Contact from "./Contact";

export default function App() {
    
   const cards = Data.map(info => {
       return(
           <Contact
                img = {info.Img}
                title = {info.title}
                des = {info.description}
                experience = {info.experience}
                language = {info.stats.Languages}
                fvrt= {info.stats.Favorites}
                source = {info.Source}
                hours = {info.HoursSpend}
            />
       )
   })

    return (
        <div>
            {cards}
        </div>
    )

}
