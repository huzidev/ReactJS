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
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={Img1}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={Img2}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={Img3}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
    
}

export default App