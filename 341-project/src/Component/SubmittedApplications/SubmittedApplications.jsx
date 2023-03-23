import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './SubmittedApplications.css'

export const SubmittedApplications= ({ changeTab, setCurrentForm }) => {
//   const [sortCompany, setSortCompany] = useState("");
//   const [sortPosition, setSortPosition] = useState("");
  const [search, setSearch] = useState("");
  

  const [ApplicantList, setApplicantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loginusername, setLoginUsername] = useState("")

    useEffect(() => {
    Axios.get("http://localhost:3001/Applications").then((response) => {
        setApplicantList(response.data);
        setFilteredList(response.data);
    });
    }, []);
    useEffect(() => {
    Axios.get("http://localhost:3001/UserLogin").then((response) => {
        setLoginUsername(response.data.find(user => user.username).username);
    });
    }, []);

  const handleSearch = (e) => {
    // if(e.target.value === "") {
    //   setFilteredList(jobList);
    // }
    console.log(e.target.value)
    // setSearch(e.target.value);
  }
  const handleSortCompany = () => {
    // setSortPosition("")
    //setSortCompany(search);
    handleFilterName();
  }
  const handleSortPosition = () => {
    // setSortCompany("");
    //setSortPosition(search);
    handleFilterPosition();
  }

  const handleFilterName = () => {
    let filtered = ApplicantList.filter(job => {
      return job.companyName.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }

  const handleFilterPosition = () => {
    let filtered = ApplicantList.filter(job => {
      return job.jobDescription.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }



  return (
    <div className='findingpage section__padding'>
      <div className='findingpage-search'>
        <input type="text" name="search" placeholder="Search..." onChange={handleSearch}></input>
        <button onClick={handleSortCompany}>Search Company</button>
        <button onClick={handleSortPosition}>Search Position</button>
        <button onClick={() => setFilteredList(ApplicantList)}> X </button>
      </div>
      <div className='findingpage-listing'>
          <h1>You Have Applied To The Following Companies:</h1>
        {ApplicantList.length > 0 ? (
          <div> {filteredList.reverse().map((value) => (
            <div>
            {value.Applicant === loginusername &&
            <React.Fragment>
            <div className='findingcard'>
              <div className='findingcard-companyname'>Company: {value.companyName}</div>
              <div className='findingcard-position'>Description: {value.jobDescription}</div>
              <div className='findingcard-employer'>Employer Name: {value.Employer}</div>
            </div>
            </React.Fragment>
            }</div>
          ))}
          </div>
        ) : (<div>You haven't applied to any companies!</div>)
        }
        </div>
    </div>
  )
}
export default SubmittedApplications
