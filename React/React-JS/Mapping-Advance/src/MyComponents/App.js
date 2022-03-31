import React from "react";
import Data from "./data";
import Contact from "./Contact";


export default function App() {
    // we use map to make ours code more self-sustaining so when ever user insert any data from web-page it'll be store in Data component form where we've already link it there so it can update automatically called self-sustaining

    // const cards is the name of variable so we can return complete function when rendering just by typing {cards}


    // <Contact is the component where all of ours MAIN JSX is written where we'll link all the info with the help of props
    
    // info.img, info.tittle is basically from Data part and info is like props we can name it whatever we want than return

    // Data is the name of ours component where all the user data is present 

    // info is basically parameter which will be receive in render

   const cards = Data.map(info => {

       return(
           <Contact
                id = {info.Id}
                info = {info} // rather than creating every single variable for each element we simply just create a variable called info and assigned it all the info (Data) from Data
            />
       )

   })

   // like their we are returning {cards} which we've mapped above
    return (
        <div className="card-list">
            {cards}
        </div>
    )

}
