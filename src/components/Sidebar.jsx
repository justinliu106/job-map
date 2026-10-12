import JobCard from "./JobCard"
import SideBarFilter from "./SidebarFilter";
import SearchBar from "./SearchBar";

export default function SideBar({ jobs, activeJob, setActiveJob, setSearchTerm, setFilteredDistance, filteredDistance }) {
    function handleJobCardClick(id) {
        setActiveJob(id);
    }
    return (
        <div className="sideBar">
            <div className="filterContainer">
                <SearchBar setSearchTerm={setSearchTerm}>
                </SearchBar>
                <SideBarFilter setFilteredDistance={setFilteredDistance} filteredDistance={filteredDistance}>
                </SideBarFilter>
            </div>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} onJobCardClick={handleJobCardClick} activeJob={activeJob}/>
            ))}
        </div>
    );
}