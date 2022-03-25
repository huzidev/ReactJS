import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../assets/react.png';

export default function Nav() {
  return (
    <nav>
        <img src={Logo} alt="React-Logo" />
        <h3 className="react">ReactJS</h3>
        <p>
            <b>
                ReactJS - Project 1
            </b>
        </p>
    </nav>
  )
}
