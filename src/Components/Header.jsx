import React from 'react'
import {HashLink} from "react-router-hash-link"


const Header = () => {
  return (
    <nav className='nav'>
        <div className="nav-heading">
          <h1>TechyStar </h1>
        </div>
        <div className="nav-links">
          <HashLink to="/#home" >Home</HashLink>
          <HashLink to="/#about" >About</HashLink>
          <HashLink to="/#brands" >Brands</HashLink>
          <HashLink to="/contact/#contact" >Contact</HashLink>
        </div>
    </nav>
  )
}

export default Header 
