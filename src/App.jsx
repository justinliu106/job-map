import Sidebar from './components/Sidebar';
import Map from './components/Map';
import TopBar from './components/TopBar';
import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs')
    .then(res => res.json())
    .then(data => setJobs(data))
  }, []);

  return (
    <div className="appContainer">
      <TopBar />
      <div className="mainContent">
        <Map jobs={jobs} activeJob={activeJob} setActiveJob={setActiveJob}/>
        <Sidebar jobs={jobs} activeJob={activeJob} setActiveJob={setActiveJob}/>      
      </div>
    </div>
  )
}

export default App

