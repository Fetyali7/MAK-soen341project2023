import React from 'react'
import logo from '../../images/JobHunt_Logo.JPG';
import './navbar.css'

export const Navbar = ({ changeTab }) => {
  return (
    // <div className='navbar'>
    //     <h1 className='navTitle' onClick={()=> {changeTab("Home")}}>JobHunt</h1>
    //     <div className='navItem' onClick={()=> {changeTab("Posting")}}>Jobpost</div>
    //     <div className='navItem' onClick={()=> {changeTab("Contact")}}>Contact</div>
    //     <div className='navItem' onClick={()=> {changeTab("Help")}}>Help</div>        
    // </div>
    <div className='Navbar__Background'>

      <img src={logo} alt="JobHunt LOGO"/>
      <div class="topnav ">
        <a href="#Home" class="active" onClick={() => { changeTab("Home") }}>JobHunt</a>
        <a href="#Finding" className='' onClick={() => { changeTab("Finding") }}>FindJob</a>
        <a href="#PostJob" onClick={() => { changeTab("Posting") }}>PostJob</a>

        <div class="topnav-right">
          <a onClick={() => { changeTab("Login") }}>Login</a>
          <a onClick={() => { changeTab("Signup") }}>SignUp</a>
          <a onClick={() => { changeTab("Aboutpage") }}>About</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar
