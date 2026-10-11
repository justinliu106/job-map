import { Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { useRef } from 'react';
import haversineDistance from '../utils/distance.js';

export default function Markers({ jobs, activeJob, setActiveJob, userLocation }) {
    const validJobs = jobs.filter(job => job.latitude && job.longitude)
    const map = useMap();
    const markerRefs = useRef({});

    useEffect(() => {
        const job = jobs.find(j => j.id === activeJob);
        if (job) {
            map.flyTo([job.latitude, job.longitude]);
            markerRefs.current[job.id]?.openPopup();
        }
    }, [activeJob]);

    return (
        <>
            {validJobs.map(job => {
                return (
                    <Marker
                        key={job.id}
                        position={[job.latitude, job.longitude]}
                        id={job.id}
                        eventHandlers={{ click: () => setActiveJob(job.id) }}
                        ref={(mkr) => { if (mkr) markerRefs.current[job.id] = mkr; }}
                    >
                        <Popup>
                            {job.company} <br /> {job.title} 
                            <br />
                            Distance from you: {Math.round(haversineDistance(job.latitude, job.longitude, 53.631611, -113.323975)*10)/10} km
                        </Popup>
                    </Marker>
                )
            })}
        </>
    );
}