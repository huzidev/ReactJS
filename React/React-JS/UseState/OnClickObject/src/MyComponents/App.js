import React from 'react';
import Star from './Star';

// THEIR we'll check how to use React.UseState in the case of object

export default function App() {

    const [Contact, SetContact] = React.useState({

        firstname: "Huzi",
        nickname: "Dev",
        phone: "1234567",
        email: "huzi.iqdev@gmail.com",
        isFav: false

    })

    function Toggle() {

        SetContact(PrevContact => ({

        // we didn't directly pass return because we are using use state for (OBJECT) therefore we've to cover ours curly braces into parentheses as we did here just right after PrevContact => ({})

            ...Contact, // this is (array spread operator) which basically imports all the data of object
            isFav: !PrevContact.isFav // ! means not hence ! not prevcontact.isfav means previously it is false by default now every time we click make it (! or OPPOSITE) IN BRIEF

        })

    )}

  return (

    <div className="main">

        <div className="card">

            <img src="../assets/main.jpg" alt="User-Img" className="user-img"/>

            <div className="card-info">

                {/* WE CAN'T DIRECTLY PASS ONCLICK HERE AT <STAR /> ATTRIBUTE BECAUSE ONCLICK IS DOM ELEMENTS 
                PROPERTY AND DOM ELEMENTS ARE BASICALLY THOSE WHICH STARTS WITH LOWERCASE LIKE img, a, p etc*/}
                
                <Star isFill={Contact.isFav} ToggleFunction={Toggle}/>
                
                <h2 className="card-name">

                    {Contact.firstname} {Contact.nickname}

                </h2>

                <p className="card-contact">

                    {Contact.phone}

                </p>

                <p className="card-contact">

                    {Contact.email}
                    
                </p>

            </div>
        </div>

    </div>


  )

}
