import MapComponent from '../components/MapComponent.jsx';

import EmbrePillCanvas from "../threemodels/EmbrePill.jsx";
import '../style.css'

function Map() {
            const locations = [
            {name:'Florida', coords: [1, 2]},
            {name: 'NY', coords: [2, 3]}
        ]
    return (
    <div className='flex flex-col'>
      <div className={"map-header"}>
          <h1 style={{fontSize:"2em"}}>What is the state of your state?</h1>
      </div>
      <div className={'map-art'}>

    return <div>
        Meow
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
        <EmbrePillCanvas/>
    </div>;


}
export default Map;
