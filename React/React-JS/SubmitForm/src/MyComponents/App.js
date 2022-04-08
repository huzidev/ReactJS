import React from 'react';

export default function App() {

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
        </form>

    )

}
