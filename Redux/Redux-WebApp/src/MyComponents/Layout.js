import React from 'react';
import Items from './Items.js';
import Nav from './Nav.js';
import Slider from './Slider.js';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Slider />
      <Items />
    </div>
  )
};