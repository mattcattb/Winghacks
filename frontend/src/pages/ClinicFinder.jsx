import React, { useState } from 'react';
import axios from 'axios';
import Geocode from "react-geocoding";


import { getNearbyClinics } from '../api/clinic';

const GEO_API_KEY = import.meta.env.VITE_GEOCODING_API_KEY

Geocode.setApiKey(GEO_API_KEY); // Replace with your API key

const ClinicFinder = () => {
  const [address, setAddress] = useState('');
  const [clinics, setClinics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Set loading to true

    try {
      const response = await Geocode.fromAddress(address); // Geocode the address

      const { lat, lng } = response.results[0].geometry.location;

      const nearbyClinics = await getNearbyClinics(lat, lng)

      setClinics(nearbyClinics);

    } catch (err) {
      console.error("Error:", err);
      setError("Error finding clinics. Please try again.");
    } finally {
      setLoading(false); // Set loading to false, regardless of success or failure
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          required // Basic validation
        />
        <button type="submit" disabled={loading}> {/* Disable button while loading */}
          {loading ? "Finding Clinics..." : "Find Clinics"} {/* Show loading message */}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {loading && <p>Loading...</p>} {/* Display loading message */}

      {clinics.length > 0 && !loading ? ( // Only show results if not loading
        <ul>
          {clinics.map((clinic) => (
            <li key={clinic._id}>{clinic.name}</li>
          ))}
        </ul>
      ) : (
        !loading && <p>{clinics.length === 0 ? "No clinics found." : ""}</p> // Only show "no clinics" message if not loading
      )}
    </div>
  );
};

export default ClinicFinder;