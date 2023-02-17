import React, { useState } from 'react'

export const PostingForm = ({postingsList, setPostingsList}) => {
    const [companyName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [employer, setEmployer] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [location, setLocation] = useState("")
    
    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        
    }
    const handleEmployer = (e) => {
        setEmployer(e.target.value);
        
    }
    const handleJobDescription = (e) => {
        setJobDescription(e.target.value);
        
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
        
    }
    const handlePostings = () =>  {
        setPostingsList([...postingsList, {companyName:companyName, phoneNumber:phoneNumber,
                                         employer:employer,jobDescription:jobDescription,
                                         location:location}]);
        console.log(postingsList);
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
        <button onClick={handlePostings}> Add </button>
        <div>
            {postingsList.length > 0 ? 
            <div>
                    {postingsList.map((value) => 
                    <div className='postings card'>
                        <div>{value.companyName}</div>
                        <div>{value.phoneNumber}</div>
                        <div>{value.employer}</div>
                        <div>{value.jobDescription}</div>
                        <div>{value.location}</div>
                    </div>)
                    }
            </div>
                : (<div> List is empty </div>)
            }
        </div>
    </div>
  )
}
