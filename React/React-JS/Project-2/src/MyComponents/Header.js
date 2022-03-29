import React from 'react'
import main from '../assets/main.jpg'

export default function Header() {

  return (
      <section>
          <img src={main} className="main-img" alt="header-img" />
          <h1 className="main-header">
              React JS
          </h1>
          <p className="main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda repellat error ipsam, unde, aperiam dolorum quasi, accusamus fugit laudantium consectetur harum tenetur fugiat amet. Molestiae vero voluptate eos aspernatur.
          </p>
      </section>
  )

}
