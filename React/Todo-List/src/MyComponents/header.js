// there we'll write JSX for header file then simply we'll link it to the main app.js by IMPORTING

// we can use rfc called ReactFunctionalComponent

import React from 'react'
import PropTypes from 'prop-types' // will import (PROPTYPES) for us
import { propTypes } from 'react-bootstrap/esm/Image'

// props is JS object which takes data from parent to child and we've to use PROPS wherever we wanted to use infomation or data or arguments form parent to child as their

// and we simply uses { props.tittle } as we did their and we already assigned tittle = My Todo List in main parent functions

export default function header(props) { // remeber THERE we've used export default but when we uses export const then in the main (APP.JS) we've to use {} then use the name of the file where JSX is written
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.tittle}</a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
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

// proptypes can be of 2 types default and one which we define

header.defaultProps = {

    tittle: "Yours Tille Here!", // when we didn't use tittle then we'll use this default prop types which will tell the user that you've to insert tittle here

    searchBar: fasle // if we want search bar false (HIDDEN) by default

}

header.PropTypes = {

    tittle: propTypes.string, // means tittle type is string but if we type int it'll give us error and we are using commas instead of semi-colon because we are in a complete single object
    searchBar: propTypes.bool // means rather it'll be true or false and these are boolean values
}