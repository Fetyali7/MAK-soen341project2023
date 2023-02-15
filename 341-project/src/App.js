import { useState } from 'react';
import './App.css';
import { Footer } from './Component/Footer';
import { Navbar } from './Component/Navbar';
import { PostingForm } from './Component/PostingForm';

function App() {
  const [postingsList, setPostingsList] = useState([]);
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <div className="App">
        <Navbar changeTab={(changeTab) => setCurrentTab(changeTab)}></Navbar>
        <div>hello</div>
        {currentTab === "Home" ? <></> : <></>}
        {currentTab === "Posting" ? <PostingForm postingsList={postingsList} setPostingsList={setPostingsList}></PostingForm> : <></>}
        <Footer></Footer>
    </div>
  );
}

export default App;
