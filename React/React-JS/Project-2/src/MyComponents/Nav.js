import React from 'react';
import Logo from '../assets/air-bnb.png';

export default function Nav() {
  return (
    <nav>
      <img src={Logo} className="nav-logo" alt="Air-Bnb-Logo" />
    </nav>
  )
}
