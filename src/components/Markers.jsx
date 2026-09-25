import { Marker, Popup } from 'react-leaflet';

export default function Markers({ jobs, activeJob, setActiveJob }) {

    const validJobs = jobs.filter(job => job.latitude && job.longitude)
    return (
        <>
            {validJobs.map(job => {
                const isActive = job.id === activeJob;
                <Marker key={job.id} position={[job.latitude, job.longitude]} id={job.id}>
                    <Popup>
                        {job.company} <br /> {job.title}
                    </Popup>
                </Marker>
            })}
        </>
    );
}