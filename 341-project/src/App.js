import { useState } from 'react';
import './App.css';

import { Findingpage, Footer, Homepage, Navbar, PostingForm, Signup, Login, Aboutpage} from './Component'
/*import {Findingpage} from './Component/Findingpage';
import { Footer } from './Component/Footer';
import {Homepage} from './Component/Homepage';
import { Navbar } from './Component/Navbar';
import { PostingForm } from './Component/PostingForm';
import { Signup } from './Component/Signup';*/

function App() {
  const [postingsList, setPostingsList] = useState([]);
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <div className="App">
        <Navbar changeTab={(changeTab) => setCurrentTab(changeTab)}></Navbar>
        {currentTab === "Home" ? <Homepage Homepage={Homepage}></Homepage> : <></>}
        {currentTab === "Posting" ? <PostingForm postingsList={postingsList} setPostingsList={setPostingsList}></PostingForm> : <></>}
        {currentTab === "Finding" ? <Findingpage Findingpage={Findingpage}></Findingpage> : <></>}
        {currentTab === "Signup" ? <Signup></Signup> : <></>}
        {currentTab === "Login" ? <Login></Login> : <></>}
        {currentTab === "Aboutcompany" ? <Aboutpage></Aboutpage> : <></>}
        <Footer></Footer>
    </div>
  );
}

export default App;
