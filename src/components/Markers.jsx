import { Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

export default function Markers({ jobs }) {
    const [selectedJob, setSelectedJob] = useState();

    const validJobs = jobs.filter(job => job.latitude && job.longitude)
    return (
        <>
            {validJobs.map(job => 
                <Marker key={job.id} position={[job.latitude, job.longitude]} id={job.id}>
                    <Popup>
                        {job.company} <br /> {job.title}
                    </Popup>
                </Marker>
            )}
        </>
    );
}