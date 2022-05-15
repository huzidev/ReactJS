import React from 'react';
import Img from '../assets/item.jfif';

export default function Auth() {
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
            <div className='items'>
                <div className='items'>
                    <img src={Img} alt="items-img" />
                    <h5>
                        Laptop
                    </h5>
                    <p>
                        <b>
                            $ 25
                        </b>
                    </p>
                    <button>
                        Add To Cart
                    </button>
                </div>
                <div className='items'>
                    <img src={Img} alt="items-img" />
                    <h5>
                        Laptop
                    </h5>
                    <p>
                        <b>
                            $ 25
                        </b>
                    </p>
                    <button>
                        Add To Cart
                    </button>
                </div>
                <div className='items'>
                    <img src={Img} alt="items-img" />
                    <h5>
                        Laptop
                    </h5>
                    <p>
                        <b>
                            $ 25
                        </b>
                    </p>
                    <button>
                        Add To Cart
                    </button>
                </div>
                <div className='items'>
                    <img src={Img} alt="items-img" />
                    <h5>
                        Laptop
                    </h5>
                    <p>
                        <b>
                            $ 25
                        </b>
                    </p>
                    <button>
                        Add To Cart
                    </button>
                </div>
                <div className='items'>
                    <img src={Img} alt="items-img" />
                    <h5>
                        Laptop
                    </h5>
                    <p>
                        <b>
                            $ 25
                        </b>
                    </p>
                    <button>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
