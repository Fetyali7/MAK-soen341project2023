import React, { useState } from 'react'
import './Aboutpage.css'
export const Aboutpage = () =>{
  return (
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

export default Aboutpage 