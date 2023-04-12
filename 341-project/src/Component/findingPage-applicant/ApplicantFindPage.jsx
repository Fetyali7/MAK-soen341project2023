import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './ApplicantFindPage.css'

export const ApplicantFindPage= ({ changeTab, setCurrentForm }) => {

  const [search, setSearch] = useState("");
  const [jobList, setJobList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

    // Fetch job postings data from API when component mounts
    useEffect(() => {
        Axios.get("http://localhost:3001/JobPostings").then((response) => {
            setJobList(response.data);
            setFilteredList(response.data);
        });
    }, []);

  //Handle seartch input change
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
    let filtered = jobList.filter(job => {
      return job.companyName.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }

  const handleFilterPosition = () => {
    let filtered = jobList.filter(job => {
      return job.jobDescription.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }

  const Apply = (e) => {
    changeTab("Application");
    setCurrentForm(e);
  }

  // Render applicant find page!
  return (
    <div className='findingpage section__padding'>
      <div className='findingpage-search'>
        <input type="text" name="search" placeholder="Search..." onChange={handleSearch}></input>
        <button onClick={handleSortCompany}>Search Company</button>
        <button onClick={handleSortPosition}>Search Position</button>
        <button onClick={() => setFilteredList(jobList)}> X </button>
      </div>
      <div className='findingpage-listing'>
        {jobList.length > 0 ? (
          <div> {filteredList.reverse().map((value) => 
            <div className='findingcard'>
              <div className='findingcard-companyname'>Company: {value.companyName}</div>
              <div className='findingcard-phonenumber'>Phone Number: {value.phoneNumber}</div>
              <div className='findingcard-jobdescription'>Employer Name: {value.employerName}</div>
              <div className='findingcard-jobdescription'>Description: {value.jobDescription}</div>
              <div className='findingcard-location'>Location: {value.location}</div>
              <button name="delBut" onClick={() => {Apply(value)}}> Apply</button>
            </div>
          )}
          </div>
        ) : (<div>This is where you can find a job!</div>)
        }
      </div>
    </div>
  )
}
export default ApplicantFindPage
