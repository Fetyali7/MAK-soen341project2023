import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { FindingPage } from '..'
import './findingpage.css'

export const Findingpage= ({Findingpage}) => {
  const [sortCompany, setSortCompany] = useState("");
  const [sortPosition, setSortPosition] = useState("");
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
    // if(e.target.value === "") {
    //   setFilteredList(jobList);
    // }
    setSearch(e.target.value);
    console.log(search);
  }
  const handleSortCompany = () => {
    setSortPosition("")
    //setSortCompany(search);
    handleFilterName();
  }
  const handleSortPosition = () => {
    setSortCompany("");
    //setSortPosition(search);
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
              <div className='findingcard-employer'>Employer Name: {value.employerName}</div>
              <div className='findingcard-jobdescription'>Description: {value.jobDescription}</div>
              <div className='findingcard-location'>Location: {value.location}</div>
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
