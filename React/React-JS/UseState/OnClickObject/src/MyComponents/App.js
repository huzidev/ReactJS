import React from 'react';

export default function App() {

    const [Contact, SetContact] = React.useState({
        firstname: "Huzi",
        nickname: "Dev",
        phone: "1234567",
        email: "huzi.iqdev@gmail.com",
        isFav: false
    })

    let star = Contact.isFav ? "StarF.jpg" : "StarE.png"

    function Toggle() {

        SetContact(PrevContact => ({

            ...Contact,
            isFav: !PrevContact.isFav

        })

    )}

  return (

    <div className="main">

        <div className="card">

            <img src="../assets/main.jpg" alt="User-Img" className="user-img"/>

            <div className="card-info">

                <img 
                src={`../assets/${star}`}
                className="fvr" 
                onClick={Toggle}
                alt="Star-Img" />
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
