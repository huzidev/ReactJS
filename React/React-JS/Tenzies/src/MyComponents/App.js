import React from 'react';
import Dice from './Dice';

export default function App() {

    const [Dice, SetDice] = React.useState(AllNewDice)

    function AllNewDice() {
        
        const NewDice = []

        for (let i = 0; i < 10; i++){

            NewDice.push(Math.ceil(Math.random() * 6))

        }

        return NewDice

    }
    return (

        <main>

            <div className="Dice-container">

                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>
                <Dice value="1"/>

            </div>

        </main>

    )

}
