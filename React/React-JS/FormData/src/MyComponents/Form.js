import React from "react";

export default function Form() {

  const [FormData, SetForm] = React.useState({

    firstName: "", // we've pass empty string by default so when user insert theirs data it'll be stored and then send to backed files
    lastName: "",
    email: "",
    comments: "",
    checkbox: false, // we dont have VALUE in checkbox scenario rather we've CHECKED instead of value like others
    employed: "", // we've created 3 radio btn and provide SAME NAME TO all three so we can select any one at a time

  })

  function handleChange(event) { // we've to pass this event as well so it'll receive the values from input than will ultimately put it into event.target with respect to other values

    const { name, value, type, checked} = event.target // in OBJECT we've name, value, type, checked these elements are equal to event.target means we dont have to write separately name.event.target, value.event.target etc 

    SetForm((PrevValue) => ({ // instead of putting all the values in return{} we simply put all the value in parentheses ({})

      ...PrevValue,
      // check type if it is checkbox then we don't have value rather we've checked
      [name]: type === "checkbox" ? checked : value // [name] should've to be inside square brackets and it is MANDATORY

    }))
  }

  function HandleSubmit(event) { // by doing this we can prevent getting get_request because we've used event.preventDefault

    event.preventDefault() // event is just parameter that receive values from ours input and will prevent them from getting into ours URL

    console.log(FormData) // we can check all the values through FormData in console log

  }
  return (

    <form onSubmit={HandleSubmit}>

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

      <input
        type="checkbox"
        id="check"
        name="checkbox"
        onChange={handleChange}
        checked={FormData.checkbox} // IN CASE OF CHECKBOX we dont have value rather we've CHECKED
      />

      {/* in htmlFor we've to give the id of the input we want it to be linked with like here we did for checkbox id */}

      <label htmlFor="check">
        Do You Wanna Subscribe To MemberShip?
      </label> 

      <br />
      <br />

      <fieldset>

        <legend>
          Current Status
        </legend>

        <input 
          type="radio"
          id="unemployed"
          name="employed" // all the radio's name should've to be same so we can't select multiple radio
          value="unemployed" // radio is bit diff therefore we didn't pass useState in value in case of radio
          checked={FormData.employed === "unemployed"} // we've to create boolean because we don't have boolean in radio
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>

        <br />

        <input 
          type="radio"
          id="part-time"
          name="employed" 
          value="part-time"
          checked={FormData.employed === "part-time"} 
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-Time</label>
        
        <br />

        <input 
          type="radio"
          id="full-time"
          name="employed" 
          value="full-time"
          checked={FormData.employed === "full-time"} 
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-Time</label>
        
        <br />
      
      </fieldset>
      {/* if we created button INSIDE form then it's type will be submit by default and we don't have to specify type = submit */}
      <button> 
        Submit 
      </button>
    </form>
    
  )
}
