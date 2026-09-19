import { useState, useEffect } from 'react'
import JobCard from "./JobCard"

export default function SideBar() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/jobs')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, []);

     return (
        <div className="sideBar">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}