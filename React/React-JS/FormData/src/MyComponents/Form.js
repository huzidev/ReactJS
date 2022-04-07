import React from 'react';

export default function Form() {



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
