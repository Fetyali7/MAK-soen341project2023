import React, { useState } from 'react'
import logo from '../../images/JobHunt_Logo.JPG';
import './homepage.css'
export const Homepage = ({Homepage}) =>{
  return (
    <div>
    <h1>Welcome to JobHunt!</h1>
    <img src={logo} alt="JobHunt LOGO"/>
    </div>
  )
}

export default Homepage 
