import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


export default function Map() {
    return (
        <div className="map">
            <MapContainer center={[53.5461, -113.4938]} zoom={13} style={{ height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
            </MapContainer>
        </div>
    );
}