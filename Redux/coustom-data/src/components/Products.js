import React from 'react';

export default function Products(props) {
    return (
        <div key={props.id}>
            <img src={`../../mapImages/${props.img}`} alt="product-img"/>
            <h5>
                name : {props.name}
            </h5>
            <h5>
                price : {props.price}
            </h5>
            <h5>
                model : {props.model}
            </h5>
            <h5>
                description : {props.description}
            </h5>
        </div>
    )
}
