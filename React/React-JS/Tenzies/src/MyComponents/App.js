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

            // for holding the CLICKED dice we've to make it an OBJECT so each dice will have its own different values like if isHeld is true or not or unique id of that dice

            // therefore we've surround the values inside {} so it'll became an object

            // ADVANTAGE of using (OBJECT) is that we don't have to declare ours code again and again because we can store multiple data or values inside object and we can drop it anywhere we wanted 

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
