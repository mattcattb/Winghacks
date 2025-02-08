<<<<<<< HEAD
// import 'leaflet/dist/leaflet.css';
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
          <h1>What is the state of your state?</h1>
      </div>
      <div className={'map-art'}>

        <MapComponent location={locations} />
      </div>
      <div className={"embre-pill-map"}>
          <EmbrePillCanvas/>
      </div>
    </div>)
=======
import MapComponent from "./MapComponent";
function  Map(){
    return <div>
        Meow
        <MapComponent/>

    </div>;


>>>>>>> 4e6a9f5cbae244042a7a1a98101ecb44a185c6fb
}
export default Map;
