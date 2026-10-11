import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import Markers from './Markers';

function useCurrentLocation() {
        const [position, setPosition] = useState(null);

        useEffect(() => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude])
                },
                (err) => {
                    console.log("Error getting current location", err);
                }
            )
        }, [])
        console.log(position);
        return position;
    }

export default function Map({ jobs, activeJob, setActiveJob, userLocation }) {
    const userIcon = L.divIcon({
        className:'user-location-marker',
        iconSize: [24,24],
    });
    return (
        <div className="map">
            <MapContainer center={[53.5461, -113.4938]} zoom={13} style={{ height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
                <Markers jobs={jobs} activeJob={activeJob} setActiveJob={setActiveJob}>
                </Markers>
                {userLocation && (
                    <Marker position={[53.631611, -113.323975]} icon={userIcon}>
                        <Popup>
                            You are here
                        </Popup>
                    </Marker>)}
            </MapContainer>
        </div>
    );
}