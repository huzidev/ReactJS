import React from 'react';
import {Link} from 'react-router-dom'
// props is JS object which takes data from parent to child and we've to use PROPS wherever we wanted to use infomation or data or arguments form parent to child as their

// and we simply uses { props.tittle } as we did their and we already assigned tittle = My Todo List in main parent functions

export default function Header(props) { // remeber THERE we've used export default but when we uses export const then in the main (APP.JS) we've to use {} then use the name of the file where JSX is written
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.tittle}</Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            {/* "?" is Turnary operator it'll check if condition is (TRUE) then print the search bar else empty as we did after semi-colon we just pass empty string */}
            {props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: " "} 
          </div>
        </div>
      </nav>
  )
}