export default function JobCard({ job }) {
    return (
        <div className="jobCard">
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <h3>{job.exact_location || job.location}</h3>
        </div>
    );
}