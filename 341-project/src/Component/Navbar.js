import React from 'react'

export const Navbar = ({changeTab}) => {
  return (
    <div className='navbar'>
        <div className='navTitle navItem'  onClick={() => {changeTab("Home")}}>JobHunt</div>
        <div className='navItem'  onClick={() => {changeTab("Posting")}}>About Us</div>
        <div className='navItem'>Contact</div>
        <div className='navItem'>Help</div>        
    </div>
  )
}
