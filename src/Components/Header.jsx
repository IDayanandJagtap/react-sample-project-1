import React, {useRef} from 'react'
import {HashLink} from "react-router-hash-link"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"


const Header = () => {

  const hamDiv = useRef();

  const toggleHamMenu = () =>{
    if(hamDiv.current.style.top === "-110vh")
      hamDiv.current.style.top = "0";
    else 
      hamDiv.current.style.top = "-110vh";
      
  }




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
        <div className="hamMenuBtn">
          <RxHamburgerMenu onClick={toggleHamMenu}/>
        </div>
        <div className="hamMenu" ref={hamDiv}>
        <div className="close-ham">
          <AiOutlineCloseCircle onClick={toggleHamMenu}/>
        </div>
          <div className="ham-nav-links">
            <HashLink  onClick={toggleHamMenu} to="/#home" >Home</HashLink>
            <HashLink  onClick={toggleHamMenu} to="/#about" >About</HashLink>
            <HashLink  onClick={toggleHamMenu} to="/#brands" >Brands</HashLink>
            <HashLink  onClick={toggleHamMenu} to="/contact/#contact" >Contact</HashLink>
          </div>
        </div>
    </nav>
  )
}

export default Header 
