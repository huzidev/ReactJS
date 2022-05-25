import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Login() {
    
    const dispatch = useDispatch();
    const [stateForUser, setStateForUser] = useState(false);
    const [stateForPassword, setStateForPassword] = useState(false);

    const user = event => {

        setStateForUser(prev => !prev)
        
    }

    function pass(params) {
        
        setStateForPassword(prev => !prev)
    }

    function next() {
        
    }

    return (
        <div className='login-main'>
            <div className='login-setup'>
                <form action="">
                    <h2>
                        Welcome
                    </h2>
                    <div className='user-input'>
                        <i className='fa fa-user'></i>
                        <div onClick={user} type="text" className={'ref' + ( stateForUser ? ' focus' : '')}>
                            <h5>
                                Username
                            </h5>
                            <input type="text" className='input'/>
                        </div>
                    </div>
                    <div className='user-input'>
                        <i className='fas fa-lock'></i>
                        <div onClick={pass} type="text" className={'ref' + ( stateForPassword ? ' focus' : '')}>
                            <h5>
                                Password
                            </h5>
                            <input type="password" className='input'/>
                        </div>
                    </div>
                    <div className='btn'>
                        <button onClick={next}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
