import React from 'react';
import Img from '../assets/product.webp'

export default function Items() {
    return (
        <div className='container'>
            <div className='list'>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                    <div className="content">
                        <h1>
                            Macbook Pro
                        </h1>
                        <p>
                            Macbook Pro
                        </p>
                    </div>
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                    <div className="content">
                        <h1>
                            Macbook Pro
                        </h1>
                        <p>
                            Macbook Pro
                        </p>
                    </div>
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                    <div className="content">
                        <h1>
                            Macbook Pro
                        </h1>
                        <p>
                            Macbook Pro
                        </p>
                    </div>
                </div>
            </div>
            <div className='list'>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                    <div className="content">
                        <h1>
                            Macbook Pro
                        </h1>
                        <p>
                            Macbook Pro
                        </p>
                    </div>
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                    <div className="content">
                        <h1>
                            Macbook Pro
                        </h1>
                        <p>
                            Macbook Pro
                        </p>
                    </div>
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                    <div className="content">
                        <h1>
                            Macbook Pro
                        </h1>
                        <p>
                            Macbook Pro
                        </p>
                    </div>
                </div>
            </div>
            <div className='info'>
                <h3>
                    Now, Lets Buy <br />
                    SomeThing.
                </h3>
            </div>
        </div>
    )
};
