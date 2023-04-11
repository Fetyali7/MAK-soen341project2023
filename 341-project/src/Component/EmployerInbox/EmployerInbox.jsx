import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './EmployerInbox.css'

export const EmployerInbox= ({ loginList }) => {
  const [search, setSearch] = useState("");

  const [ApplicantsList, setApplicantsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [jobList, setJobList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/Applications").then((response) => {
            setApplicantsList(response.data);
            setFilteredList(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/JobPostings").then((response) => {
            setJobList(response.data);
        });
    }, []);

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  }
  const handleSortCompany = () => {
    handleFilterName();
  }
  const handleSortPosition = () => {
    handleFilterPosition();
  }

  const handleFilterName = () => {
    let filtered = ApplicantsList.filter(job => {
      return job.companyName.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }

  const handleFilterPosition = () => {
    let filtered = ApplicantsList.filter(job => {
      return job.jobDescription.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }

  const Interview = (value) => {
    Axios.post("http://localhost:3001/insertInterview", {  companyName:value.companyName,
                                                            jobDescription:value.jobDescription,
                                                            Employer:value.Employer,
                                                            Applicant:value.Applicant,
                                                            
    }).then(() => {
        alert("Sucess");
    });
}


  return (
    <div className='findingpage section__padding'>
      <div className='findingpage-search'>
        <input type="text" name="search" placeholder="Search..." onChange={handleSearch}></input>
        <button onClick={handleSortCompany}>Search Company</button>
        <button onClick={handleSortPosition}>Search Position</button>
        <button onClick={() => setFilteredList(ApplicantsList)}> X </button>
      </div>
      <div className='findingpage-listing'>
        {ApplicantsList.length > 0 ? (
          <div> {filteredList.reverse().map((value) => (
            <div>
            {value.Employer === (loginList.find(user => user.username)).username &&
            <React.Fragment>
            <div className='findingcard'>
              <div className='findingcard-companyname'>Company: {value.companyName}</div>
              <div className='findingcard-position'> Position: {value.jobDescription}</div>
              <div className='findingcard-email'>Applicant Name: {value.applicantName}</div>
              <div className='findingcard-email'>Phone Number: {value.phoneNumber}</div>
              <div className='findingcard-email'>Email: {value.email}</div>
              <div className='findingcard-applicantdescription'>Applicant Description: {value.applicantDescription}</div>
              <div className='findingcard-yearsexperience'>Years Of Experience: {value.yearsExperience}</div>
              <div className='findingcard-location'>Location: {value.location}</div>

              <button name="delBut" onClick={() => {Interview(value)}}> Interview</button>
              </div>
              </React.Fragment>
            }  
            </div>
            
          ))}
          </div>
        ) : (<div>This is your Employer Inbox!</div>)
        }
      </div>
    </div>
  )
}
export default EmployerInbox
