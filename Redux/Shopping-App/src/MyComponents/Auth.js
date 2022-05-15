import React from 'react';

export default function Auth() {
    return (
        <div className='container'>
            <h1>
                Login
            </h1>
            <form>
                <label htmlFor="id">
                    Id
                </label>
                <input type="text" name='id' id='id' />
                <label htmlFor="password">
                    password
                </label>
                <input type="password" name='password' id='password' />
                <button className='login-btn' type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}
