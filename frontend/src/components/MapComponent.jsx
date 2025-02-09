import "../App.css";
import { useState, useEffect, useRef } from "react";
import { statesArray } from "../../../staticDB/states";
import WeirdMapComp from "./WeirdMapComp";
//create a default space for info to pop up
function MapComponent() {
  const [selectedState, setselectedState] = useState(null);
  const [statesData, setStatesData] = useState([]);
  const sectionRef = useRef(null); // Ref for the section

  useEffect(() => {
    setStatesData(statesArray);
  }, []);

  const handleClick = (e) => {
    const stateId = e.target.getAttribute("id");
    const stateInfo = statesData.find((state) => state.abbr === stateId);
    setselectedState(stateInfo || null);

    console.log(`state clicked: ${stateId}`);
    console.log(`state info: ${JSON.stringify(stateInfo)}`);
  };
  useEffect(() => {
    // Scroll to the section when selectedState changes and is not null
    if (selectedState && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedState]); // This makes the effect run when selectedState changes

  return (
    <div className="map-container w-full h-[900px] flex flex-col justify-center">
      {" "}
      {/* Container with Tailwind classes */}
      <div>
        <MapComponent handleClick={handleClick}/>
      </div>
      <div>
        <section
          ref={sectionRef}
          className="state-info-section m-10 w-[700px] pt-14">
          {" "}
          {/* Added ref and className */}
          {selectedState && ( // Conditionally render the section
            <div>
              <div className="flex flex-row justify-center items-center gap-5">
                <h2 className="font-bold text-7xl text-fuchsia-700">
                  {selectedState.name}
                </h2>
                <p className="text-4xl">
                  Restriction Level: {selectedState.restrictionLevel}
                </p>
              </div>

              {selectedState.restrictionFacts.map((fact, idx) => (
                <p key={idx}>{fact}</p>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
export default MapComponent;
