import React from 'react';
import Dice from './Dice';

export default function App() {

    const [RollDice, SetRollDice] = React.useState(AllNewDice())

    function AllNewDice() {
        
        const NewDice = []

        for (let i = 0; i < 10; i++){

            NewDice.push({
                
                value: Math.ceil(Math.random() * 6),
                
                isHeld: false
            
            })
            // push will put the elements at the end of new element

            // for holding the CLICKED dice we've to make it an OBJECT so each dice will have its own diff values like if isHeld is true or not or unique id of that dice

        }

        return NewDice
        // make sure to return whenever we creat new array 
        // so all the new info could be stored into that new array after RETURNING

    }

    function Roll() {
        
        SetRollDice(AllNewDice())

    }

    const DiceElements = RollDice.map(dice => <Dice value={dice}/>)
    // as we knew instead of updating values AGAIN AND AGAIN we simply use .Map for updating arrays elements

    return (

        <main>

            <div className="Dice-container">

                {/* Instead of creating 10 diff div for Dice we simply created a function above with LOOP */}
                {DiceElements}

            </div>

            <button className="Roll" onClick={Roll}>

                Roll

            </button>

        </main>

    )

}
