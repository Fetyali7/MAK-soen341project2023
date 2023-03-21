import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './Application.css'

export const Application = ({applicationsList, setApplicationsList}) => {
    const [applicantName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [applicantemail, setApplicantemail] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [location, setLocation] = useState("")
    return(  
        <div>
            <h1>Welcome to job application!</h1>
            </div>
    )
}

export default Application