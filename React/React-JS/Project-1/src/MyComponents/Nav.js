import React from 'react';
import Logo from '../assets/react.png';

export default function Nav() {
  return (
    <nav>
        <div className="left">
            <img src={Logo} alt="React-Logo" />
            <h3 className="text">ReactJS</h3>
        </div>
        <p>
            <b>
                ReactJS - Project 1
            </b>
        </p>
    </nav>
  )
}
