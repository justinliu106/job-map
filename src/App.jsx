import Sidebar from './components/Sidebar';
import Map from './components/Map';
import TopBar from './components/TopBar';
import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs')
    .then(res => res.json())
    .then(data => setJobs(data))
  }, []);

  const visibleJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function useCurrentLocation() {
        const [position, setPosition] = useState(null);

        useEffect(() => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude])
                },
                (err) => {
                    console.log("Error getting current location", err);
                }
            )
        }, [])
        console.log(position);
        return position;
    }

  return (
    <div className="appContainer">
      <TopBar />
      <div className="mainContent">
        <Map jobs={visibleJobs} activeJob={activeJob} setActiveJob={setActiveJob} userLocation={useCurrentLocation()}/>
        <Sidebar jobs={visibleJobs} activeJob={activeJob} setActiveJob={setActiveJob} setSearchTerm={setSearchTerm}/>      
      </div>
    </div>
  )
}

export default App

