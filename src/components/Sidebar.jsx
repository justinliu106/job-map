import JobCard from "./JobCard"
import SideBarFilter from "./SidebarFilter";
import SearchBar from "./SearchBar";

export default function SideBar({ jobs, activeJob, setActiveJob, setSearchTerm }) {
    function handleJobCardClick(id) {
        setActiveJob(id);
    }
    return (
        <div className="sideBar">
            <div className="filterContainer">
                <SearchBar setSearchTerm={setSearchTerm}>
                </SearchBar>
                <SideBarFilter>
                </SideBarFilter>
            </div>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} onJobCardClick={handleJobCardClick} activeJob={activeJob}/>
            ))}
        </div>
    );
}