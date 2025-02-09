import React, { useEffect, useState, useRef, useCallback } from "react"; // useMemo removed as not currently needed
import { getNearbyClinics, getAllClinics } from "../api/clinic";
import { Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import { PlaceAutocompleteClassic } from "../components/PlaceAutocomplete";

const ClinicFinder = () => {
  const defaultCenter = { lat: 39.8283, lng: -98.5795 };
  const defaultZoomLevel = 4; // Define a constant for default zoom

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(defaultZoomLevel); // Use defaultZoomLevel
  const [mapCenter, setMapCenter] = useState(defaultCenter);

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

    setMapCenter({ lat, lng });
    setZoom(13); // Consistent zoom level for place selection and marker click

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
    setZoom(13); // Consistent zoom level
    setMapCenter({ lat: clinic.lat, lng: clinic.lng });
  };

  return (
    <div className="flex flex-col w-full justify-start mt-11">
      <h2 className="text-5xl m-5 text-fuchsia-950 font-bold">Find Clinics Near You</h2>
      <div className="flex flex-col w-[1300px] gap-7 justify-center">
        <PlaceAutocompleteClassic onPlaceSelect={handlePlaceSelect} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading clinics...</p>}

        <div>
          <Map
            style={{ width: "100%", height: "600px" }}
            center={mapCenter}
            zoom={zoom}
            // defaultCenter prop removed - using initial mapCenter state
            scrollwheel={true}
            defaultZoom={defaultZoomLevel} // Use defaultZoomLevel constant
            reuseMaps={true}
            onCenterChanged={(map) => setMapCenter(map.detail.center)} // Can destructure here if desired
            onZoomChanged={(map) => setZoom(map.detail.zoom)}       // Can destructure here if desired
            options={{
              gestureHandling: "greedy",
              draggable: true,
            }}
            ref={mapRef}
            mapId={"f581f64e2de5941c"}
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
                onCloseClick={() => setActiveClinic(null)}
              >
                <div>
                  <h3 className="text-black">{activeClinic.name}</h3>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>

        <div className="bg-white rounded-lg shadow-md w-full h-auto m-5 p-6"> {/* Container - changed background, padding, margin */}
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Nearby Clinics</h3> {/* Title - adjusted margin and color */}
          <ul className="space-y-3"> {/* Vertical spacing for list items, removed flex-row, items-center, text-center */}
            {nearClinics.map((clinic) => (
              <li
                key={clinic._id}
                className="text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 cursor-pointer"
                onClick={() => handleMarkerClick(clinic)}
              >
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