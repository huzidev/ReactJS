import React from 'react'

export default function Hard(props) {

    return (

        function AllNewDice() {
        
            const NewDice = []
                
                for (let i = 0; i < 20; i++){
        
                    NewDice.push(props.GenerateNewDice())
        
                    // push will put the old elements at the end of new element
        
                }
    
            return NewDice
            // make sure to return whenever we creat new array 
            // so all the new info could be stored into that new array after RETURNING
    
        }

    )
    
}
