import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './MyComponents/react.png';

export default function Nav() {
  return (
    <nav>
        <img src="{Logo}" alt="React-Logo" />
        <h3 className="react">ReactJS</h3>
    </nav>
  )
}
