import React from 'react';

export default function Form() {

  const[FormData, SetForm] = React.useState({

    firstName: ""

  })

  function handleChange() {
    
    const{name} = EventTarget

    SetForm(PrevValue => ({

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
    </form>

  )

}
