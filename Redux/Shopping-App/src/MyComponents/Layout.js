import React from 'react';
// import Img from '../assets/item.jfif';

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
               <div className='items'>
                   <img src={`../assets/${props.info.imgURL}`} alt="items-img" />
                   <h3>
                       {props.info.name}
                   </h3>
                   <p>
                       <b>
                           {props.info.price}
                       </b>
                   </p>
                   <button>
                       Add To Cart
                   </button>
               </div>
               <div className='items'>
                   <img src={`../assets/${props.info.imgURL}`} alt="items-img" />
                   <h3>
                       Laptop
                   </h3>
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
                   <img src={`../assets/${props.info.imgURL}`} alt="items-img" />
                   <h3>
                       Laptop
                   </h3>
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
                   <img src={`../assets/${props.info.imgURL}`} alt="items-img" />
                   <h3>
                       Laptop
                   </h3>
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
                   <img src={`../assets/${props.info.imgURL}`} alt="items-img" />
                   <h3>
                       Laptop
                   </h3>
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
