import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

export default function Map({ jobs }) {
    return (
        <div className="map">
            <MapContainer center={[53.5461, -113.4938]} zoom={13} style={{ height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
                <Markers jobs={jobs}>
                </Markers>
            </MapContainer>
        </div>
    );
}