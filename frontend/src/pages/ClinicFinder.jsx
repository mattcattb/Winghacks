import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'; // Correct import

const containerStyle = {
  width: '400px',
  height: '300px'
};

const center = {
  lat: 29.6519,
  lng: -82.3250
};

const GOOGLEMAPS_API_KEY = 'YOUR_API_KEY'; // Replace with your API key

export default function ClinicFinder() {
  const { isLoaded } = useJsApiLoader({
    id: 'googleMaps',
    googleMapsApiKey: GOOGLEMAPS_API_KEY // Use the constant
  });

  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          if (map) {
            map.panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported.");
    }
  }, [map]);

  useEffect(() => {
    const fetchNearbyLocations = async () => {
      // Placeholder Data:
      const sampleData = [
        { id: 1, name: "Coffee Shop A", lat: 29.65, lng: -82.32 }, // Corrected lng
        { id: 2, name: "Park B", lat: 29.66, lng: -82.31 },
        { id: 3, name: "Restaurant C", lat: 29.64, lng: -82.33 },
      ];
      setNearbyLocations(sampleData);
    };

    if (userLocation) {
      fetchNearbyLocations();
    }
  }, [userLocation]);

  const onLoad = function(map) {
    setMap(map);
  };

  const onUnmount = function() {
    setMap(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation || center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {userLocation && <Marker position={userLocation} />}
      {nearbyLocations.map((location) => (
        <Marker
          key={location.id} // Use a unique key (id is best)
          position={{ lat: location.lat, lng: location.lng }} // Corrected lng
          onClick={() => setSelectedLocation(location)}
        >
          {/* You can add content to the marker here if needed */}
        </Marker>
      ))}

      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div>
            <h3>{selectedLocation.name}</h3>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <div>Map not loaded...</div>
  );
}