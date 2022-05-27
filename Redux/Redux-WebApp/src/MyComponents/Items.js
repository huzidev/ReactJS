import React from 'react';
import Img from '../assets/product.webp'

export default function Items() {
    return (
        <div className='container'>
            <div className='list'>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                </div>
            </div>
            <div className='list'>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                </div>
                <div className="items">
                    <img src={Img} alt="item-img" className="img" />
                </div>
            </div>
        </div>
    )
};
