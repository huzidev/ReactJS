import React from 'react';
import Items from './Items';

export default function Layout(props) {

    return (
        <div>
            <nav>
                <h2>
                    Redux Shopping App
                </h2>
                <div className='cart'>
                    <h5>
                        cart: 5 items
                    </h5>
                </div>
            </nav>
            <div className='list'>
                <Items />
            </div>
            <div className='right'>
                <h3>
                    Total : 100 $
                </h3>
            </div>
            <div className='right'>
                <button>
                    Place Order
                </button>
            </div>
        </div>
    )
}
