import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './ApplicantInbox.css'

export const ApplicantInbox= ({ currentForm, setCurrentTab }) => {

  const [search, setSearch] = useState("");
  const [InterviewsList, setInterviewsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loginusername, setLoginUsername] = useState("");


    // Fetches data from the Interviews API and sets the state for InterviewsList and filteredList
    useEffect(() => {
        Axios.get("http://localhost:3001/Interviews").then((response) => {
            setInterviewsList(response.data);
            setFilteredList(response.data);
        });
    }, []);

    // Fetches data from the UserLogin API and sets the state for loginusername
    useEffect(() => {
        Axios.get("http://localhost:3001/UserLogin").then((response) => {
            setLoginUsername(response.data.find(user => user.username).username);
        });
      }, []);

  // Updates the search state when the user types into the search bar
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
    let filtered = InterviewsList.filter(job => {
      return job.companyName.toLowerCase().includes(search.toLowerCase());
    })
  console.log(filtered);
  setFilteredList(filtered);
  }

  const handleFilterPosition = () => {
    let filtered = InterviewsList.filter(job => {
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
        <button onClick={() => setFilteredList(InterviewsList)}> X </button>
      </div>
      
      <div className='findingpage-listing'>
        {InterviewsList.length > 0 ? (
          <div> {filteredList.reverse().map((value) => (
            <div key={value.idInterviews.id}>
            {value.Applicant === loginusername &&
            <React.Fragment>
            <div className='findingcard'>
              <div className='findingcard-companyname'>Congratulations!</div>
              <div className='findingcard-phonenumber'>You've been selected for an interview for the following position! The Employer will contact you via email to set up a time for an interview!</div>
              <div className='findingcard-jobdescription'>Company: {value.companyName}</div>
              <div className='findingcard-jobdescription'>Description: {value.jobDescription}</div>
              <div className='findingcard-location'>Employer Name: {value.Employer}</div>
            </div>
            </React.Fragment>
            }</div>
          ))}
          </div>
        ) : (<div>This is Your Applicant Inbox!</div>)
        }
        </div>
    </div>
  )
}
export default ApplicantInbox
