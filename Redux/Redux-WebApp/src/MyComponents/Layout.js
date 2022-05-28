import React from 'react';
import Items from './Items.js';
import Nav from './Nav.js';
import Slider from './Slider/Slider.js';
import SliderCart from './SliderCart.js';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Slider />
      <Items />
      <div className='cart-items'>
        <SliderCart />
      </div>
    </div>
  )
};