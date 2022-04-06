import React from 'react';

// THEIR we'll check how to use React.UseState in the case of object

export default function App() {

    const [Contact, SetContact] = React.useState({

        firstname: "Huzi",
        nickname: "Dev",
        phone: "1234567",
        email: "huzi.iqdev@gmail.com",
        isFav: false

    })

    let star = Contact.isFav ? "StarF.jpg" : "StarE.png" // as we know that ? and : are ternary operators ? means if true and : means else if false we'll pass this variable for src portion in ours JSX

    function Toggle() {

        SetContact(PrevContact => ({

        // we didn't directly pass return because we are using use state for (OBJECT) therefore we've to cover ours curly braces into parentheses as we did here just right after PrevContact => ({})

            ...Contact, // this is array spread operator which basically imports all the data of object
            isFav: !PrevContact.isFav // ! means not hence ! not prevcontact.isfav means previously it is false by default now every time we click make it ! or OPPOSITE IN BRIEF

        })

    )}

  return (

    <div className="main">

        <div className="card">

            <img src="../assets/main.jpg" alt="User-Img" className="user-img"/>

            <div className="card-info">

                <img src={`../assets/${star}`} className="fvr" onClick={Toggle} alt="Star-Img" />
                
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
