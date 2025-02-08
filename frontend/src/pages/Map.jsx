import { ComposableMap, Geographies, Geography } from "react-simple-maps"


function Map() {
    const geoUrl =
   " https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
    return <div>

    <ComposableMap>
        <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>;


}
export default Map;
