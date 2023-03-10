import React, { useState } from 'react'
import Axios from 'axios';


export const EditForm = ({currentForm, setCurrentTab}) => {
    const [companyName, setCompanyName] = useState(currentForm.companyName)
    const [phoneNumber, setPhoneNumber] = useState(currentForm.phoneNumber)
    const [employerName, setEmployerName] = useState(currentForm.employerName)
    const [jobDescription, setJobDescription] = useState(currentForm.jobDescription)
    const [location, setLocation] = useState(currentForm.location)
    
    const updatePosting = () => {
        Axios.put("http://localhost:3001/update", {  companyName:companyName, 
                                                                phoneNumber:phoneNumber,
                                                                employerName:employerName,
                                                                jobDescription:jobDescription,
                                                                location:location,
                                                                id:currentForm.idJobPostings,
        }).then(() => {
            alert("Sucessfully edited");
        });
        setCurrentTab("Finding")
    }

    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleEmployerName = (e) => {
        setEmployerName(e.target.value);
    }
    const handleJobDescription = (e) => {
        setJobDescription(e.target.value);
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

  return (
    <div className='postingform section__padding'>
        <h1>Edit</h1>
        <div className='postingform-content'>
            <div className='postingform-content__input'>
                <div className='postingform-content__input-company'>
                    <label>Company Name</label>
                    <input placeholder={"Company Name"} value={companyName} onChange={handleCompanyName}></input>
                </div>
                <div className='postingform-content__input-phonenumber'>
                    <label>Phone Number</label>
                    <input placeholder="514-***-****" value={phoneNumber} onChange={handlePhoneNumber}></input>
                </div>
                <div className='postingform-content__input-employer'>
                    <label>Employer</label>
                    <input placeholder="Employer" value={employerName} onChange={handleEmployerName}></input>
                </div>
                <div className='postingform-content__input-jobdescription'>
                    <label>Job Description</label>
                    <input placeholder="Job Description" value={jobDescription} onChange={handleJobDescription}></input>
                </div>
                <div className='postingform-content__input-location'>
                    <label>Location</label>
                    <input placeholder="Location" value={location} onChange={handleLocation}></input>
                </div>
                <div className='postingform-content__input-button'>
                    <button onClick={updatePosting}> Edit </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditForm
