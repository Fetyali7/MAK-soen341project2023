//Importing necessay modules and components
import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { Findingpage, Footer, Homepage, Navbar, PostingForm, Signup, Login, Aboutpage} from './Component'
import EditForm from './Component/findingPage/EditForm';
import Application from './Component/Application/Application';
import ApplicantFindPage from './Component/findingPage-applicant/ApplicantFindPage';
import EmployerInbox from './Component/EmployerInbox/EmployerInbox';
import ApplicantInbox from './Component/ApplicantInbox/ApplicantInbox';
import SubmittedApplications from './Component/SubmittedApplications/SubmittedApplications';
import Profile from './Component/Profile/Profile';

// App component
function App() {
  // Setting up state variables using useState hook
  const [postingsList, setPostingsList] = useState([]);
  const [loginList, setLoginList] = useState([]);
  const [currentTab, setCurrentTab] = useState("Home");
  const [currentForm, setCurrentForm] = useState([]);
  
  // Fetching data from the server using Axios and useEffect hook
  useEffect(() => {
    Axios.get("http://localhost:3001/UserLogin").then((response) => {
      if(response.data == null) {
        return;
      } 
      setLoginList(response.data);
    });
  }, []);
  
  // Rendering the componenets based on the currentTab state
  return (
    <div className="App">
        <Navbar changeTab={(changeTab) => setCurrentTab(changeTab)}></Navbar>
        {currentTab === "Home" ? <Homepage Homepage={Homepage}></Homepage> : <></>}
        {currentTab === "Posting" ? <PostingForm postingsList={postingsList} setPostingsList={setPostingsList}></PostingForm> : <></>}
        {currentTab === "Application" ? <Application currentForm={currentForm} setCurrentTab={setCurrentTab}></Application> : <></>}
        {currentTab === "Finding" ? <Findingpage changeTab={(changeTab) => setCurrentTab(changeTab)} setCurrentForm={setCurrentForm} loginList={loginList}></Findingpage> : <></>}
        {currentTab === "ApplicantFindPage" ? <ApplicantFindPage changeTab={(changeTab) => setCurrentTab(changeTab)} setCurrentForm={setCurrentForm}></ApplicantFindPage> : <></>}
        {currentTab === "Signup" ? <Signup changeTab={(changeTab) => setCurrentTab(changeTab)} ></Signup> : <></>}
        {currentTab === "Login" ? <Login loginList={loginList} setLoginList={setLoginList}></Login> : <></>}
        {currentTab === "ApplicantInbox" ? <ApplicantInbox currentForm={currentForm} setCurrentTab={setCurrentTab}></ApplicantInbox> : <></>}
        {currentTab === "SubmittedApplications" ? <SubmittedApplications changeTab={(changeTab) => setCurrentTab(changeTab)} setCurrentForm={setCurrentForm}></SubmittedApplications> : <></>}
        {currentTab === "EmployerInbox" ? <EmployerInbox loginList={loginList}></EmployerInbox> : <></>}
        {currentTab === "EditForm" ? <EditForm currentForm={currentForm} setCurrentTab={setCurrentTab}></EditForm> : <></>}
        {currentTab === "Aboutpage" ? <Aboutpage></Aboutpage> : <></>}
        {currentTab === "Profile" ? <Profile loginList={loginList}></Profile> : <></>}
        <Footer></Footer>
    </div>
  );
}

export default App;
