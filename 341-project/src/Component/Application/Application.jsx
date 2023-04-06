import React, { ChangeEvent,useEffect, useState } from 'react'
import Axios from 'axios';
import './Application.css'


export const Application = ({currentForm, setCurrentTab}) => {
    const [applicantName, setApplicantName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [applicantDescription, setApplicantDescription] = useState("")
    const [location, setLocation] = useState("")
    const [yearsExperience, setYearsExperience] = useState("")
    // const [loginList, setLoginList] = useState([])
    const [Applicant, setApplicant] = useState("")
    // const [Employer, setEmployer] = useState(currentForm.Employer)
    


    useEffect(() => {
        Axios.get("http://localhost:3001/UserLogin").then((response) => {
            // setLoginList(response.data);
            const loginUser = response.data.find(user => user.username);
            setApplicant(loginUser.username);
        });
      }, []);



    const createApplication = () => {

    
    
 Axios.post("http://localhost:3001/insertApplication",{  applicantName:applicantName, 
            phoneNumber:phoneNumber,
            email:email,
            applicantDescription:applicantDescription,
            yearsExperience:yearsExperience,
            location:location,
            Applicant:Applicant,
            Employer:currentForm.Employer,
            companyName:currentForm.companyName,
            jobDescription:currentForm.jobDescription,
            //instantiate file value
        }
        ).then(() => {
            alert("Application successfully submitted!");
        });
        setCurrentTab("ApplicantFindPage")
    }

    
    

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

       

  return (
    <div className='postingform section__padding'>
        <div className='postingform-content'>
            <h1>Application Form</h1>
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
                    <input placeholder="Email" value={email} onChange={handleEmail}></input>
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
                <div className='postingform-content__input-location'>
                    <label>Add a file</label>
                    {/* map file value here */}
                    <input type='file' placeholder="Add a file"></input>
                </div>

                <div className='postingform-content__input-button'>
                    <button onClick={createApplication}> Add </button>
                </div>
            </div>
        </div>
    </div>    
  )
};


export default Application;