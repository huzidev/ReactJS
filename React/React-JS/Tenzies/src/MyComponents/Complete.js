import React from 'react';
import Confetti from "react-confetti";

export default function Complete(props) {

    return(

        <div>
            
            {props.Tenzies && <Confetti />}

        </div>
        
    )

}
