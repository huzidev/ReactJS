import React from 'react'

export default function Login() {
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
                        <input type="text" className='input'/>
                    </div>
                    <div className='user-input'>
                        <i className='fas fa-lock'></i>
                        <h5>
                            Password
                        </h5>
                        <input type="password" className='input'/>
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
