import React, { useState } from 'react'

export const PostingForm = ({postingsList, setPostingsList}) => {
    const [companyName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [employer, setEmployer] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [location, setLocation] = useState("")
    
    const handleCompanyName = (e) => {
        setCompanyName(e.target.companyName);
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.phoneNumber);
        
    }
    const handleEmployer = (e) => {
        setEmployer(e.target.employer);
        
    }
    const handleJobDescription = (e) => {
        setJobDescription(e.target.jobDescription);
        
    }
    const handleLocation = (e) => {
        setLocation(e.target.location);
        
    }
    const handlePostings = () =>  {
        setPostingsList([...postingsList, {companyName:companyName, phoneNumber:phoneNumber,
                                         employer:employer,jobDescription:jobDescription,
                                         location:location}]);
    }

  return (
    <div>
        <label>Company Name</label>
        <input placeholder="Company Name" value={companyName} onChange={handleCompanyName}></input>
        <label>phoneNumber</label>
        <input placeholder="514-***-****" value={phoneNumber} onChange={handlePhoneNumber}></input>
        <label>employer</label>
        <input placeholder="Employer" value={employer} onChange={handleEmployer}></input>
        <label>jobDescription</label>
        <input placeholder="Job Description" value={jobDescription} onChange={handleJobDescription}></input>
        <label>Location</label>
        <input placeholder="Location" value={location} onChange={handleLocation}></input>
        <button onClick={handlePostings()}> Add </button>
    </div>
  )
}
