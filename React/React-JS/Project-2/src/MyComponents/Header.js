import React from 'react'
import main from '../assets/main.jpg'

export default function Header() {\

  return (
      <section>
          <img src={main} alt="header-img" />
          <h1 className="main-header">React JS</h1>
      </section>
  )

}
