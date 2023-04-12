import React from 'react'
import {useEffect, useState} from "react";
import Axios from 'axios';
import logo from '../../images/JobHunt_Logo.JPG';
import './navbar.css'



export const Navbar = ({ changeTab }) => {

  // Define state to hold the user login list
  const [LoginList, setLoginList] = useState([]);

  // Fetch user login list from the server when the componenet mounts
  useEffect(() => {
    Axios.get("http://localhost:3001/UserLogin").then((response) => {
        setLoginList(response.data);
    });
  }, []);

  // Function to delete user login from the server and log out the user
  const deleteUserLogin = (idUserLogin) => {
    Axios.delete(`http://localhost:3001/deleteUserLogin/${idUserLogin}`);
    alert("You have successfully logged out!");
    window.location.reload(); // Reload the page after loggin out
    console.log(idUserLogin)
  }

  
  return (

    
    <div className='Navbar__Background'>

      <img src={logo} alt="JobHunt LOGO"/>
      <div class="topnav ">
        <a href="#Home" class="active" onClick={() => { changeTab("Home") }}>JobHunt</a>
        {/* Render Jobs link only for employer users */}
        {LoginList.map((user,index) => { 
          if(user.apliemp === "Employer"){
            return(
              <a href="#Finding" className='' onClick={() => { changeTab("Finding") }}>Jobs</a>
            );
            }
        })}
        {LoginList.map((user,index) => { 
          if(user.apliemp === "Employer"){
            return(
            <a href="#PostJob" onClick={() => { changeTab("Posting") }}>PostJob</a>
            );
            }
        })}
        {LoginList.map((user,index) => { 
          if(user.apliemp === "Applicant"){
            return(
            <a href="#ApplicantFindPage" onClick={() => { changeTab("ApplicantFindPage") }}>FindJob</a>
            );
            }
        })}
        {LoginList.map((user,index) => { 
          if(user.apliemp === "Applicant"){
            return(
            <a href="#SubApp" onClick={() => { changeTab("SubmittedApplications") }}>Submitted</a>
            );
            }
        })}
        <div class="topnav-right">
        
        {LoginList.length === 0 &&
        <React.Fragment>
        <a onClick={() => { changeTab("Login") }}>Login</a>
        <a onClick={() => { changeTab("Signup") }}>SignUp</a>
        </React.Fragment>
        }
        {LoginList.map((user,index) => { 
        if((user.apliemp !== "Employer") & (user.apliemp !=="Applicant")){
           return(
            <a onClick={() => { changeTab("Login") }}>Login</a>
            );
          }
        })}
        {LoginList.map((user,index) => { 
        if((user.apliemp !== "Employer") & (user.apliemp !=="Applicant")){
          return(
            <a onClick={() => { changeTab("Signup") }}>SignUp</a>
          );
         }
        })}
        {LoginList.map((user,index) => { 
          if(user.apliemp === "Applicant"){
            return(
            <a href="#ApplicantInbox" onClick={() => { changeTab("ApplicantInbox") }}>Inbox</a>
            );
            }
        })}
        {LoginList.map((user,index) => { 
          if(user.apliemp === "Employer"){
            return(
            <a href="#EmployerInbox" onClick={() => { changeTab("EmployerInbox") }}>Inbox</a>
            );
            }
        })}
        {LoginList.map((user,index) => { 
        if((user.apliemp === "Employer") || (user.apliemp ==="Applicant")){
          return(
            <a onClick={() => {deleteUserLogin(user.idUserLogin) }}>Logout</a>
          );
         }
        })}
        {LoginList.map((user,index) => { 
        if((user.apliemp === "Employer") || (user.apliemp ==="Applicant")){
          return(
            <a onClick={() => { changeTab("Profile") }}>{user.username}</a>
          );
         }
        })}
        {LoginList.length === 0 &&
          <a onClick={() => { changeTab("Aboutpage") }}>About</a>
        }
        </div>
      </div>
    </div>


  )
}

export default Navbar
