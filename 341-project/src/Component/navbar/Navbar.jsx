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
        <a href="#Posting" onClick={() => { changeTab("Posting") }}>PostJob</a>
        <a href="#Search" onClick={() => { changeTab("Search") }}>Search</a>

        <div class="topnav-right">
          <a href="#Login" onClick={() => { changeTab("Login") }}>Login</a>
          <a href="#Signup" onClick={() => { changeTab("Signup") }}>SignUp</a>
          <a href="#AboutCompany" onClick={() => { changeTab("Aboutcompany") }}>About</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar
