import React from 'react';
import Dice from './Dice';

export default function App() {

    const [RollDice, SetRollDice] = React.useState(AllNewDice())

    function AllNewDice() {
        
        const NewDice = []

        for (let i = 0; i < 10; i++){

            NewDice.push(Math.ceil(Math.random() * 6))

        }

        return NewDice

    }

    const DiceElements = RollDice.map(dice => <Dice value={dice}/>)

    return (

        <main>

            <div className="Dice-container">

                {/* Instead of creating 10 diff div for Dice we simply created a function above with LOOP */}
                {DiceElements}

            </div>

        </main>

    )

}
