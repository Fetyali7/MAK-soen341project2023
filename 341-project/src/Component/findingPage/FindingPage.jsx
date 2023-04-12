import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './findingpage.css'

export const Findingpage= ({ changeTab, setCurrentForm, loginList }) => {
  const [search, setSearch] = useState("");

  const [jobList, setJobList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
      Axios.get("http://localhost:3001/JobPostings").then((response) => {
          setJobList(response.data);
          setFilteredList(response.data);
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

  const deleteJobPosting = (idJobPostings) => {
    Axios.delete(`http://localhost:3001/deleteJobPostings/${idJobPostings}`);
    console.log(idJobPostings)
  }

  const editJobPosting = (e) => {
    changeTab("EditForm");
    setCurrentForm(e);
  }
  
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
            <div key={value.idjobpostings.id}>
            <div className='findingcard'>
              <div className='findingcard-companyname'>Company: {value.companyName}</div>
              <div className='findingcard-phonenumber'>Phone Number: {value.phoneNumber}</div>
              <div className='findingcard-jobdescription'>Employer Name: {value.employerName}</div>
              <div className='findingcard-jobdescription'>Description: {value.jobDescription}</div>
              <div className='findingcard-location'>Location: {value.location}</div>
              {value.Employer === (loginList.find(user => user.username)).username &&
              <React.Fragment>
              <button name="delBut" onClick={() => {editJobPosting(value)}}> Edit </button>
              <button name="delBut" onClick={() => {deleteJobPosting(value.idJobPostings); window.location.reload(true); window.location = '341-project/src/Component/findingPage/FindingPage.jsx'}}> Delete </button>
              </React.Fragment>
              }
            </div>
            </div>
          )}
          </div>
        ) : (<div>This is where you can find a job!</div>)
        }
      </div>
    </div>
  )
}
export default Findingpage
