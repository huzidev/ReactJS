import React from 'react';

export default function App() {

    const[FormData, SetFormData] = React.useState({

        Email: "",
        Password: "",
        ConfirmPassword: "",
        checkbox: false

    })

    function HandleChange(event) {

        const{name, value, type, checked} = event.target
        
        SetFormData(PrevData =>({

            ...PrevData,

            [name]: type === "checkbox" ? checked : value

        }))
        
    }

    return(

        <form >
            <input 
                placeholder="Yours Email"
                type="text"
                name="Email"
                onChange={HandleChange}
                value={FormData.name} 
            />

            <input 
                placeholder="Password"
                type="password"
                name="Password"
                onChange={HandleChange}
                value={FormData.name} 
            />

            <input 
                placeholder="Confirm Password"
                type="password"
                name="ConfirmPassword"
                onChange={HandleChange}
                value={FormData.name} 
            />

            <input 
                id="check"
                type="checkbox"
                name="checkbox"
                onChange={HandleChange}
                checked={FormData.name} 
            />

            <label htmlFor="check">
                Do You Wanna Subscribe To Ours News?
            </label>
            
            <button>
                Submit
            </button>
        </form>

    )

}
