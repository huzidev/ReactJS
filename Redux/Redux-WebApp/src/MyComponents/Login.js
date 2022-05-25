import React, { useState } from 'react';

export default function Login() {
    
    const [state, setState] = useState(false);

    function add() {
        setState(prev => !prev.state)
        if (state === true) {
            setState(prev => !prev.state)
        }
    }

    const isOn = state

    return (
        <div className='login-main'>
            <div className='login-setup'>
                <form action="">
                    <h2>
                        Welcome
                    </h2>
                    <div className='user-input'>
                        <i className='fa fa-user'></i>
                        <h5>
                            Username
                        </h5>
                        <input onClick={add} type="text" className={'input' + ( isOn ? ' focus' : '')}/>
                    </div>
                    <div className='user-input'>
                        <i className='fas fa-lock'></i>
                        <h5>
                            Password
                        </h5>
                        <input onClick={add} type="password" className={'input' + ( isOn ? ' focus' : '')}/>
                    </div>
                    <div className='btn'>
                        <button>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
