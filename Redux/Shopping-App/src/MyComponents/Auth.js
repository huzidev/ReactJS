import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/auth-slice';

export default function Auth() {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        event.preventDefault();

        dispatch(authActions.login())
        // so when use login it'll runs the authActions from auth-slice.js by dispatch(To Send)
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
                <input type="text" name='id' id='id' placeholder='yours ID' />
                <br />
                <label htmlFor="password">
                    password
                </label>
                <br />
                <input type="password" name='password' id='password' placeholder='yours password'/>
                <br />
                <button className='login-btn' type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}
