import React from 'react'
import {Link } from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import '../styles/Header.css'

const Header = () => {
  return (
    <nav className='nav'>
        <div className="nav-heading">
          <h1>TechyStar </h1>
        </div>
        <div className="nav-links">
          <HashLink to="/#home" >Home</HashLink>
          <Link to="/contact" >Contact</Link>
          <HashLink to="/#about" >About</HashLink>
          <HashLink to="/#brands" >Brands</HashLink>
          <Link to="/#services" >Services</Link>
        </div>
    </nav>
  )
}

export default Header 
