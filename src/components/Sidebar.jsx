import JobCard from "./JobCard"
import { useState } from "react";

export default function SideBar({ jobs, activeJob, setActiveJob }) {
    function handleJobCardClick(id) {
        setActiveJob(id);
    }
    return (
        <div className="sideBar">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} onJobCardClick={handleJobCardClick} activeJob={activeJob}/>
            ))}
        </div>
    );
}