import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent.jsx';
import EmbrePillCanvas from "./EmbrePill.jsx";
import { useState } from "react";
import '../style.css'

function Map() {
    const [hoveredState, setHoveredState] = useState(null);
        const locations = [
            {name:'Florida', coords: [1, 2]},
            {name: 'NY', coords: [2, 3]}
        ]
    return <div>
        <div className={"map-header"}>
            <h1>What is the state of your state?</h1>
        </div>
        <div className={'map-art'}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
        <MapComponent location={locations} />
        </div>
        <div className={"embre-pill-map"}>
            <EmbrePillCanvas/>
        </div>
    </div>
}
export default Map;
