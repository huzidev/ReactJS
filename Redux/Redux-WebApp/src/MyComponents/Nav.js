import React from 'react';
import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { layoutActions } from '../Store/Layout-Store';

export default function Nav() {

    const hamburgerOpen = useSelector((state) => state.layout.hamburgerOpen);

    const dispatch = useDispatch();

    function hamburger() {
        dispatch(layoutActions.open());
    }

    // const [state, stateFunction] = React.useState(false);



    const activeClass = hamburgerOpen ? ' open' : '';

    return (
        <div>
            <nav>
                <img src={Logo} alt="logo" className="logo"/>
                <div>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div onClick={() => hamburger(!hamburgerOpen)} className={'ham' + activeClass}>
                    <div className='hamburger-menu'>
                    </div>
                </div>
            </nav>
        </div>
    )
}
