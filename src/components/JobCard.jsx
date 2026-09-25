export default function JobCard({ job, onJobCardClick, selectedJob }) {
    function handleClick() {
        onJobCardClick(job.id)
    }

    const isSelected = job.id === selectedJob;
    return (
        <div className={`jobCard ${isSelected ? "selected" : ""}`} id={job.id} onClick={handleClick}>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <h3>{job.exact_location || job.location}</h3>
        </div>
    );
}