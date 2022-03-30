import React from "react"
import Contact from "./Contact"
import Img from "../assets/main.jpg"
import Img1 from "../assets/slider.jpg"
import Img2 from "../assets/slider2.webp"
import Img3 from "../assets/slider3.jpg"

function App() {

    return (
        <div className="contacts">
            <Contact 
                img={Img} 
                name="Goku"
                status="Saiyan"
                info="Latest Form - Ultra Instinct"
            />
            <Contact 
                img={Img1}
                name="Goku"
                status="Saiyan"
                info="Latest Form - Super Ultra Instinct"
            />
            <Contact 
                img={Img2}
                name="Vegeta"
                status="Prince "
                info="Latest Form - Super Saiyan Blue"
            />
            <Contact 
                img={Img3}
                name="Vegeta"
                status="Prince "
                info="Latest Form - Super Saiyan Blue"
            />
        </div>
    )

}

export default App