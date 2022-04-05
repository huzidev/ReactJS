import React from 'react';

export default function App() {

    const [Contact, SetContact] = React.useState({
        firstname: "Huzi",
        nickname: "Huzi-Dev",
        phone: "1234567",
        email: "huzi.iqdev@gmail.com",
        isFav: false
    })

  return (

    <div className="main">

        <div className="card">
            <img src="../assets/main.jpg" alt="User-Img" />
            <div className="card-info">
                <img 
                src={`../assets/StarE.png`}
                className="fvr" 
                alt="Star-Img" />
                <h2 className="card-name">
                    {Contact.firstname} {Contact.nickname}
                </h2>
                <p>
                    {Contact.phone}
                </p>
                <p>
                    {Contact.email}
                </p>
            </div>
        </div>

    </div>


  )

}