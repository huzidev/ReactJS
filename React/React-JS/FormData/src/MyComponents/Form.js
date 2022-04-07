import React from "react";

export default function Form() {

  const [FormData, SetForm] = React.useState({

    firstName: ""

  })

  function handleChange(event) {

    const { name, value } = event.target

    SetForm((PrevValue) => ({

      ...PrevValue,

      [name]: value

    }))

  }
  return (

    <form>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={FormData.firstName}
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={FormData.lastName}
      />
      
      <input
        type="email"
        placeholder="Yours Email"
        name="email"
        onChange={handleChange}
        value={FormData.email}
      />
      <textarea // IN REACT we textarea is single closing tag while in HTML we did <textarea></textarea>
        name="comments" // we dont have to specify the type of textarea because it has been set by default
        placeholder="Yours Comments"
        onChange={handleChange}
        value={FormData.comments}
      />
      
    </form>
    
  )
}
