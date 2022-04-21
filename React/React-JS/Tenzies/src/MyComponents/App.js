import React from 'react';
import Dice from './Dice';
import {nanoid} from "nanoid"

export default function App() {

    const [RollDice, SetRollDice] = React.useState(AllNewDice())

    function GenerateNewDice() {
        
        return {
                
            value: Math.ceil(Math.random() * 6),
            
            isHeld: false,

            id: nanoid()

            // for holding the CLICKED dice we've to make it an OBJECT so each dice will have its own different (values) like if (isHeld) is (true) or not or (unique id) of that dice

            // therefore we've surround the values inside {} so it'll became an object

            // ADVANTAGE of using (OBJECT) is that we don't have to declare ours code again and again because we can store multiple data or values inside object and we can drop it anywhere we wanted 
        }

    }

    function AllNewDice() {
        
        const NewDice = []

        for (let i = 0; i < 10; i++){

            NewDice.push(GenerateNewDice())

            // push will put the old elements at the end of new element

        }

        return NewDice
        // make sure to return whenever we creat new array 
        // so all the new info could be stored into that new array after RETURNING

    }

    function Roll() {
        
        SetRollDice(OldDice => OldDice.map(dice => {

            return (

                dice.isHeld ? dice : GenerateNewDice()
                // we've to GENERATE all the numbers except the CLICKED one and REMEMBER here we'll not use
                // ... because we didn't want same number back again and again rather we required all sets of new dice except the clicked ones

            )

        }))

    }

    function HoldDice(id){

        SetRollDice(OldDice => OldDice.map(dice => {

            return (
                
                    dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
                    // dice.id === id of that div we've clicked on than {...dice} because dice is a parameter receiving all previous values included Random Numbers : dice because if it is not true than simple return dice which have all previous values
                )

        }))

    }

    const DiceElements = RollDice.map(dice => (
    
        <Dice 
            key={dice.id} 
            value={dice.value} 
            isHeld={dice.isHeld} 
            HoldDice={() => HoldDice(dice.id)}
        />
    
    ))

    // (Dice) is the name of component name where all properties are written and (dice) is just parameter receiving function

    // as we knew instead of updating values AGAIN AND AGAIN we simply use .Map for updating arrays elements or by creating new array where all (UPDATED) information is stored

    return (

        <main>

            <h1 className="title">Tenzies</h1>

            <p className="instructions">
            
                Roll until all dice are the same. Click each die to freeze it at its current value between 
                rolls.
            
            </p>

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
