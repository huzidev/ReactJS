import React from 'react';
import Items from './Items.js';
import Nav from './Nav.js';
import Slider from './Slider/Slider.js';
import SliderCart from './Cart/SliderCart.js';
import CartItems from './Cart/CartItems.js';
import Footer from './Footer.js';
import { useSelector } from 'react-redux';

export default function Layout() {

  const setShowCart = useSelector((state) => state.cart.setShowCart);

  return (
    <div>
      {setShowCart ? <CartItems /> : (
          <>
            <Nav />
            <Slider />
            <Items />
            <div className='cart-items'>
              <SliderCart />
            </div>
            <Footer />
        </>)}
    </div>
  )
};