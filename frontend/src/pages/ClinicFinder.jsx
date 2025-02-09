import React, { useEffect, useState } from "react";
import { getNearbyClinics, getAllClinics } from "../api/clinic";
import { Map, Marker } from "@vis.gl/react-google-maps";

import { PlaceAutocompleteClassic } from "../components/PlaceAutocomplete"; // adjust path as needed

const ClinicFinder = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [nearClinics, setNearClinics] = useState([]);
  const [allClinics, setAllClinics] = useState([]);

  useEffect(() => {
    const loadAllClinics = async () => {
      setLoading(true);
      try {
        const res = await getAllClinics();
        console.log(`Got all clinics: ${res}`);
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

    // Get coordinates from the selected place
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    // Optionally, fetch nearby clinics using the location
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

  const defaultCenter = { lat: 39.8283, lng: -98.5795 };

  return (
    <div className="flex flex-col w-full justify-start">
      <h2 className="text-5xl m-5">Find Clinics Near You</h2>

      <div className="flex flex-col w-[600px] ">

        {/* Auto complete Selection Bar? */}


        <PlaceAutocompleteClassic onPlaceSelect={handlePlaceSelect} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading && <p>Loading clinics...</p>}

        {/* Where you selected? */}

        {selectedPlace && (
          <div>
            <h3>{selectedPlace.formatted_address}</h3>
            <p>
              Latitude: {selectedPlace.geometry.location.lat()}
              <br />
              Longitude: {selectedPlace.geometry.location.lng()}
            </p>
          </div>
        )}

        {/* Map Element */}
        <div>
          <Map
            style={{ width: "100%", height: "600px" }}
            defaultCenter={defaultCenter}
            defaultZoom={4}>
            {allClinics.map((clinic) => (
              <Marker
                key={clinic._id}
                position={{ lat: clinic.lat, lng: clinic.lng }}
                title={clinic.name}
              />
            ))}
          </Map>
        </div>

        {nearClinics.length > 0 && (
          <div>
            <h3>Nearby Clinics</h3>
            <ul>
              {nearClinics.map((clinic) => (
                <li key={clinic._id}>{clinic.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicFinder;
