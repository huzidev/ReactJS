import React from 'react'

export default function Login() {
    return (
        <div className='login-main'>
            <div className='login-setup'>
                <form action="">
                    <h2>
                        Welcome
                    </h2>
                    <div>
                        <h5>
                            Username
                        </h5>
                        <input type="text" className='input'/>
                    </div>
                    <div>
                        <h5>
                            Password
                        </h5>
                        <input type="password" className='input'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
