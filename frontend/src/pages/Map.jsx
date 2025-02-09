// import 'leaflet/dist/leaflet.css';
import WeirdMapComp from "../components/WeirdMapComp";
import "../App.css";

import EmbrePillCanvas from "../threemodels/EmbrePill.jsx";
import { useState, useEffect, useRef } from "react";
import { statesArray } from "../../../staticDB/states";
import {mapData} from '../assets/mapSVG.js'

import {getAllStatesData} from '../api/statesData.js'

import { getRestrictionColor, getStateFill } from "../api/colorUtils.js";

import "../style.css";


function Map() {
  const [selectedState, setselectedState] = useState(null);
  const [statesData, setStatesData] = useState([]);
  const sectionRef = useRef(null); // Ref for the section

  useEffect(() => {
    // load states data

    const loadAllStates = async () => {

      const allStatesData = await getAllStatesData();
      console.log(JSON.stringify(allStatesData))
      setStatesData(allStatesData);
      console.log(statesData)
    }

    loadAllStates()
  }, []);

  const handleClick = (stateId) => {
    // const stateId = e.target.getAttribute("id");
    const stateInfo = statesData.find((state) => state.abbr === stateId);
    setselectedState(stateInfo || null);

    console.log(`state clicked: ${stateId}`);
    console.log(`state info: ${JSON.stringify(stateInfo)}`);
    console.log(`total states: ${stateInfo.length()}`)
  };
  useEffect(() => {
    // Scroll to the section when selectedState changes and is not null
    if (selectedState && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedState]); // This makes the effect run when selectedState changes

  return (
    <div className="font-custom flex flex-col items-center mt-5 justify-center min-h-screen bg-gradient-to-r from-light-purple to-light-pink font-gelica-extra-light overflow-y-auto md:px-0"> 
      <div className="map-header py-16 text-center mt-5">
      <h1 className="bg-[#1F0322] px-[6vh] py-[6vh] rounded-[5vh] inline-block text-[3em] font-gelica-black leading-[0.5]">
        Find resources for your state.
      </h1>


      </div>
      <div className={"map-art"}>
        <div className="map-container w-full h-[800px] flex flex-col justify-center">
          
        <div className="map-container w-full h-[900px] flex flex-col justify-center">
          {statesData.length > 0 && ( // Only render the SVG if statesData is loaded
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="477 421 593.3779761904764 318.2870370370371"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              {mapData.map(({ id, d, title }) => {
                const matchingState = statesData.find(state => state.abbr.toUpperCase() === id.toUpperCase()); // Use statesData here!
                const fillClass = matchingState ? getStateFill(matchingState.restrictionLevel) || "fill-gray-700" : "fill-gray-700"; // Default if no match

                return (
                  <path
                    key={id}
                    d={d}
                    className={`${fillClass} hover:fill-fuchsia-300 transition duration-300 cursor-pointer`}
                    title={title}
                    onClick={() => handleClick(id)}
                    id={id}
                  />
                );
              })}
            </svg>
          )}
          {!statesData.length && <p>Loading map...</p>} {/* Display a loading message */}
        </div>

        </div>
        <div className="flex flex-row items-center">
          <div className="py-10 flex justify-center">
            {/* Embre pill container */}
            <div className="">
              <EmbrePillCanvas />
            </div>
          </div>
          
          <section
            ref={sectionRef}
            className="state-info-section m-10 w-[700px] pt-14 ">
            {selectedState && ( // Conditionally render the section
              <div className="m-4 rounded-lg bg-purple-200 p-7">
                <div className="flex flex-row justify-center items-center gap-5">
                  <h2 className="font-bold text-7xl text-fuchsia-700">
                    {selectedState.name}
                  </h2>
                  <p className={`text-4xl ${getRestrictionColor(selectedState.restrictionLevel)}`}>
                    Restriction Level: {selectedState.restrictionLevel}
                  </p>
                </div>
                <div className='flex flex-col m-4 gap-2 text-fuchsia-800'>
                  {selectedState.restrictionFacts.map((fact, idx) => (
                    <p key={idx}>{fact}</p>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
export default Map;
