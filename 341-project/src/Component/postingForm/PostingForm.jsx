import React, { useState } from 'react'
import Axios from 'axios';
import './postingForm.css'

export const PostingForm = ({postingsList, setPostingsList}) => {
    const [companyName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [employerName, setEmployerName] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [location, setLocation] = useState("")
    
    const createPosting = () => {
        Axios.post("http://localhost:3001/insertJobPosting", {  companyName:companyName, 
                                                                phoneNumber:phoneNumber,
                                                                employerName:employerName,
                                                                jobDescription:jobDescription,
                                                                location:location,
        }).then(() => {
            alert("Sucess");
        });
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
    const handlePostings = () =>  {
        setPostingsList([...postingsList, {companyName:companyName, phoneNumber:phoneNumber,
                                         employerName:employerName,jobDescription:jobDescription,
                                         location:location}]);
        console.log(postingsList);
    }

  return (
    <div className='postingform section__padding'>
        <div className='postingform-content'>
            <div className='postingform-content__input'>
                <div className='postingform-content__input-company'>
                    <label>Company Name</label>
                    <input placeholder="Company Name" value={companyName} onChange={handleCompanyName}></input>
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
                    <button onClick={createPosting}> Add </button>
                </div>
            </div>
        </div>
        <div className='postingform-listing'>
            {postingsList.length > 0 ? 
            <div>
                    {postingsList.map((value) => 
                    <div className='postingcard'>
                        <div className='postingcard-companyname'>Company: {value.companyName}</div>
                        <div className='postingcard-phonenumber'>Phone: {value.phoneNumber}</div>
                        <div className='postingcard-employer'>Employer: {value.employer}</div>
                        <div className='postingcard-jobdescription'>Description: {value.jobDescription}</div>
                        <div className='postingcard-location'>Location: {value.location}</div>
                    </div>)
                    }
            </div>
                : (<div></div>)
            }
        </div>
    </div>
  )
}

export default PostingForm
