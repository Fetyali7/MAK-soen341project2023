import { useState } from 'react';
import './App.css';

import { Findingpage, Footer, Homepage, Navbar, PostingForm, Signup, Login, Aboutpage} from './Component'
import EditForm from './Component/findingPage/EditForm';
import Application from './Component/Application/Application';

/*import {Findingpage} from './Component/Findingpage';
import { Footer } from './Component/Footer';
import {Homepage} from './Component/Homepage';
import { Navbar } from './Component/Navbar';
import { PostingForm } from './Component/PostingForm';
import { Signup } from './Component/Signup';*/

function App() {
  const [postingsList, setPostingsList] = useState([]);
  const [loginList, setLoginList] = useState([]);
  const [signUpList, setSignUpList] = useState([]);
  const [currentTab, setCurrentTab] = useState("Home");
  const [currentForm, setCurrentForm] = useState([]);
  const [applicationsList, setApplicationsList] = useState([]);
  return (
    <div className="App">
        <Navbar changeTab={(changeTab) => setCurrentTab(changeTab)}></Navbar>
        {currentTab === "Home" ? <Homepage Homepage={Homepage}></Homepage> : <></>}
        {currentTab === "Posting" ? <PostingForm postingsList={postingsList} setPostingsList={setPostingsList}></PostingForm> : <></>}
        {currentTab === "Application" ? <Application applicationsList={applicationsList} setApplicationsList={setApplicationsList}></Application> : <></>}
        {currentTab === "Finding" ? <Findingpage changeTab={(changeTab) => setCurrentTab(changeTab)} setCurrentForm={setCurrentForm}></Findingpage> : <></>}
        {currentTab === "Signup" ? <Signup signUpList={signUpList} setSignUpList={setSignUpList}></Signup> : <></>}
        {currentTab === "Login" ? <Login loginList={loginList} setLoginList={setLoginList}></Login> : <></>}
        {currentTab === "EditForm" ? <EditForm currentForm={currentForm} setCurrentTab={setCurrentTab}></EditForm> : <></>}
        {currentTab === "Aboutpage" ? <Aboutpage></Aboutpage> : <></>}
        <Footer></Footer>
    </div>
  );
}

export default App;
