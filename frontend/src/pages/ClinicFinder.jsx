import React, { useEffect, useState, useRef, useCallback } from "react";
import { getNearbyClinics, getAllClinics } from "../api/clinic";
import { Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import { PlaceAutocompleteClassic } from "../components/PlaceAutocomplete";

const ClinicFinder = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(4)

  const [activeClinic, setActiveClinic] = useState(null);
  const [nearClinics, setNearClinics] = useState([]);
  const [allClinics, setAllClinics] = useState([]);

  const mapRef = useRef(null);

  useEffect(() => {
    const loadAllClinics = async () => {
      setLoading(true);
      try {
        const res = await getAllClinics();
        setAllClinics(res);
      } catch (error) {
        console.error("Error loading clinics:", error);
        setError("Error loading clinics.");
      } finally {
        setLoading(false);
      }
    };
    loadAllClinics();
  }, []);

  const handlePlaceSelect = async (place) => {
    if (!place || !place.geometry) {
      setError("Selected place has no geometry.");
      return;
    }
    setSelectedPlace(place);
    setError(null);
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setLoading(true);
    try {
      const clinicsData = await getNearbyClinics(lat, lng);
      setNearClinics(clinicsData);
    } catch (err) {
      console.error("Error fetching clinics:", err);
      setError("Error fetching clinics.");
    } finally {
      setLoading(false);
    }
  };


  const handleMarkerClick = (clinic) => {
    setActiveClinic(clinic);
    if (mapRef.current) {
      const map = mapRef.current()
      map.setZoom(10)
      map.panTo({ lat: clinic.lat, lng: clinic.lng })
    }
  }

  const defaultCenter = { lat: 39.8283, lng: -98.5795 };
  const center = activeClinic
    ? { lat: activeClinic.lat, lng: activeClinic.lng }
    : defaultCenter;


  const onMapLoad = useCallback(function callback(map){
    if(mapRef.current){
      mapRef.current.setZoom(10)
    }
  }, [])

  const onCenterChange = useCallback(function callback(map) {
    if (mapRef.current) {
      mapRef.current.setZoom(10); // Set zoom when center changes
    }
  }, []);  
    
  return (
    <div className="flex flex-col w-full justify-start mt-11 ">
      <h2 className="text-5xl m-5">Find Clinics Near You</h2>
      <div className="flex flex-col w-[1300px] gap-7 justify-center">
        <PlaceAutocompleteClassic onPlaceSelect={handlePlaceSelect} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading clinics...</p>}

        <div>
          <Map
            style={{ width: "100%", height: "600px" }}
            defaultCenter={center}
            scrollwheel={true}
            defaultZoom={4}
            onLoad={onMapLoad}
            onCenterChanged={onCenterChange}
            onZoomChanged={(e) => setZoom(e.target.getZoom())} 
          >
            {allClinics.map((clinic) => (
              <Marker
                key={clinic._id}
                position={{ lat: clinic.lat, lng: clinic.lng }}
                title={clinic.name}
                onClick={() => handleMarkerClick(clinic)}
              />
            ))}

            {activeClinic && (
              <InfoWindow
                position={{ lat: activeClinic.lat, lng: activeClinic.lng }}
                defaultZoom={5}
                onCloseClick={() => setActiveClinic(null)}>
                <div>
                  <h3 className="text-black">{activeClinic.name}</h3>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>

        <div className="flex flex-col p-5 bg-gray-100 rounded-lg shadow-lg w-[300px] h-auto overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4 text-black">Nearby Clinics</h3>
          <ul className="flex flex-row space-y-2 items-center text-center">
            {nearClinics.map((clinic) => (
              <li
                key={clinic._id}
                className="text-lg text-gray-800"
                onClick={() => handleMarkerClick(clinic)}>
                {clinic.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicFinder;
