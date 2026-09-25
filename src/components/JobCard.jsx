export default function JobCard({ job, onJobCardClick, activeJob }) {
    function handleClick() {
        onJobCardClick(job.id)
    }

    const isActive = job.id === activeJob;
    return (
        <div className={`jobCard ${isActive ? "active" : ""}`} id={job.id} onClick={handleClick}>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <h3>{job.exact_location || job.location}</h3>
        </div>
    );
}