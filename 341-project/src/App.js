import { useState } from 'react';
import './App.css';
import {Findingpage} from './Component/Findingpage';
import { Footer } from './Component/Footer';
import {Homepage} from './Component/Homepage';
import { Navbar } from './Component/Navbar';
import { PostingForm } from './Component/PostingForm';

function App() {
  const [postingsList, setPostingsList] = useState([]);
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <div className="App">
        <Navbar changeTab={(changeTab) => setCurrentTab(changeTab)}></Navbar>
        {currentTab === "Home" ? <Homepage Homepage={Homepage}></Homepage> : <></>}
        {currentTab === "Posting" ? <PostingForm postingsList={postingsList} setPostingsList={setPostingsList}></PostingForm> : <></>}
        {currentTab === "Finding" ? <Findingpage Findingpage={Findingpage}></Findingpage> : <></>}
        <Footer></Footer>
    </div>
  );
}

export default App;
