import { useDispatch, useSelector } from 'react-redux';
import { logInActions } from '../Store/Login-Store';

export default function Login() {
    
    const dispatch = useDispatch();

    const setStateForUser = useSelector((state) => state.login.setStateForUser);
    const setStateForPassword = useSelector((state) => state.login.setStateForPassword);

    function test() {
        dispatch(logInActions.user())
    }

    function testA() {
        dispatch(logInActions.pass())
    }

    function next() {
        dispatch(logInActions.logIn())
    }

    const activeClassForUser = setStateForUser ? ' focus' : '';
    const activeClassForPass = setStateForPassword ? ' focus' : '';

    return (
        <div className='login-main'>
            <div className='login-setup'>
                <form action="">
                    <h2>
                        Welcome
                    </h2>
                    <div className='user-input'>
                        <i className='fa fa-user'></i>
                        <div onClick={test} type="text" className={'ref' + activeClassForUser}>
                            <h5>
                                Username
                            </h5>
                            <input type="text" className='input'/>
                        </div>
                    </div>
                    <div className='user-input'>
                        <i className='fas fa-lock'></i>
                        <div onClick={testA} type="text" className={'ref' + activeClassForPass}>
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
