import React from 'react';
import Img from '../assets/slider.jpg'

export default function Home() {
    return (

        <div className='main'>

            <img src={Img} alt="Main-Img" className='home-img'/>
            <h1>
                Goku
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore quis delectus iste repellendus, deserunt rerum nesciunt repellat optio autem aliquam eum ad sint, facilis consectetur eius odit id at.
            </p>
        </div>

      )
}
