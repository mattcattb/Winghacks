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
        <MapComponent/>
        <EmbrePillCanvas/>
      </div>
    </div>)


}
export default Map;
