import React, { useState } from 'react'
import './Aboutpage.css'

//Define the Aboutpage component using an arrow function
export const Aboutpage = () =>{
  return (
    // Create a div element with the 'about' and 'section__padding' classes
    <div className='about section__padding gradient__bg'>
      <div className='about-heading'>
        <h1>About JobHunt</h1>
      </div>
      <div className='about-content'> 
        <p>JobHunt makes life easier to apply and to reasearch the desired job. JobHunt facilitates employers to post amazing jobs 
        for applicants as many as they want. JobHunt's mission is to help people find jobs and companies they love.</p>
      </div>
    </div>
  )
}

// Export the Aboutpage component as the default export
export default Aboutpage 