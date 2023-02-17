import React from 'react'
import './navbar.css'

export const Navbar = ({changeTab}) => {
  return (
    // <div className='navbar'>
    //     <h1 className='navTitle' onClick={()=> {changeTab("Home")}}>JobHunt</h1>
    //     <div className='navItem' onClick={()=> {changeTab("Posting")}}>Jobpost</div>
    //     <div className='navItem' onClick={()=> {changeTab("Contact")}}>Contact</div>
    //     <div className='navItem' onClick={()=> {changeTab("Help")}}>Help</div>        
    // </div>
    <div className='Navbar__Background'>
      <div class="topnav">
      <a class="active" onClick={()=> {changeTab("Home")}}>JobHunt</a>
      <a  onClick={()=> {changeTab("Finding")}}>FindJob</a>
      <a  onClick={()=> {changeTab("Posting")}}>PostJob</a>
      <a onClick={()=> {changeTab("Search")}}>Search</a>
      <div class="topnav-right">
        <a  onClick={()=> {changeTab("Login")}}>Login</a>
        <a  onClick={()=> {changeTab("Signup")}}>SignUp</a>
        <a onClick={()=> {changeTab("Aboutcompany")}}>About</a>
      </div>
    </div>
  </div>
  )
}

export default Navbar
