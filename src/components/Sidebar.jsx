import JobCard from "./JobCard"
import { useState } from "react";

export default function SideBar({ jobs }) {
    const [selectedJob, setSelectedJob] = useState()
    function handleJobCardClick(id) {
        setSelectedJob(id);
    }
    return (
        <div className="sideBar">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} onJobCardClick={handleJobCardClick} selectedJob={selectedJob}/>
            ))}
        </div>
    );
}