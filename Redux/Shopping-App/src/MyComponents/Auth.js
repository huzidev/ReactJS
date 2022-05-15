import React from 'react';
import { useDispatch } from 'react-redux';

export default function Auth() {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        event.preventDefault();

        
    }

    return (
        <div className='container'>
            <h1>
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">
                    Id
                </label>
                <br />
                <input type="text" name='id' id='id' />
                <br />
                <label htmlFor="password">
                    password
                </label>
                <br />
                <input type="password" name='password' id='password' />
                <br />
                <button className='login-btn' type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}
