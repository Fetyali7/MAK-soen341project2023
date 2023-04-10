import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export const Profile = ({loginList}) => {
    useEffect(() => {
        Axios.get("http://localhost:3001/getProfile").then((response) => {
            response.data.map((acc) => {
                if(acc.email === loginList[0].email) {
                    setApplicantName(acc.fullName);
                    setPhoneNumber(acc.phoneNumber);
                    setEmail(acc.email);
                    setApplicantDescription(acc.intro);
                    setLocation(acc.location);
                    setYearsExperience(acc.yrsExp);
                }
            })

        });
    }, [])

    const [applicantName, setApplicantName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [applicantDescription, setApplicantDescription] = useState("")
    const [location, setLocation] = useState("")
    const [yearsExperience, setYearsExperience] = useState("")
    const [Applicant, setApplicant] = useState("")
    const handleApplicantName = (e) => {
        setApplicantName(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        
    }
    const handleApplicantDescription = (e) => {
        setApplicantDescription(e.target.value);
        
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
        
    }
    const handleYearsExperience = (e) => {
        setYearsExperience(e.target.value);
        
    }
    const updateProfile = () => {
        Axios.put("http://localhost:3001/editProfile", {       applicantName:applicantName, 
                                                                phoneNumber:phoneNumber,
                                                                email:email,
                                                                applicantDescription:applicantDescription,
                                                                yearsExperience:yearsExperience,
                                                                location:location,

        }).then(() => {
            alert("Profile Edited!");
        });
    }
  return (
    <div className='postingform section__padding'>
        <div className='postingform-content'>
            <h1>Profile of {loginList[0].username}</h1>
            <div className='postingform-content__input'>
                <div className='postingform-content__input-company'>
                    <label>Applicant Full Name</label>
                    <input placeholder="Applicant Full Name" value={applicantName} onChange={handleApplicantName}></input>
                </div>
                <div className='postingform-content__input-phonenumber'>
                    <label>Phone Number</label>
                    <input placeholder="514-***-****" value={phoneNumber} onChange={handlePhoneNumber}></input>
                </div>
                <div className='postingform-content__input-employer'>
                    <label>Email</label>
                    <input placeholder="Email" value={email}></input>
                </div>
                <div className='postingform-content__input-jobdescription'>
                    <label>Introduce Yourself </label>
                    <input placeholder="Tell Us About Yourself" value={applicantDescription} onChange={handleApplicantDescription}></input>
                </div>
                <div className='postingform-content__input-yearsExperience'>
                    <label>Years Of Experience</label>
                    <input placeholder="Years Of Experience" value={yearsExperience} onChange={handleYearsExperience}></input>
                </div>
                <div className='postingform-content__input-location'>
                    <label>Location</label>
                    <input placeholder="Location" value={location} onChange={handleLocation}></input>
                </div>
                <div className='postingform-content__input-button'>
                    <button onClick={updateProfile}> Edit </button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile
