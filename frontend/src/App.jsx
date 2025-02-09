import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmbreChat from "./pages/EmbreChat";
import Map from "./pages/Map";
import ClinicFinder from "./pages/ClinicFinder";
import Navbar from "./components/nav-bar";
import "./App.css";

import {APIProvider} from '@vis.gl/react-google-maps'

const App = () => {
  
  const VITE_GEOCODING_API_KEY = import.meta.env.VITE_GEOCODING_API_KEY
  console.log(`Geocoding api: ${VITE_GEOCODING_API_KEY}`)
  
  return (
    <APIProvider apiKey={VITE_GEOCODING_API_KEY}>
      <div>
        <Router>
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/clinics" element={<ClinicFinder />} />
              <Route path="/chat" element={<EmbreChat/>}/>
            </Routes>
          </main>
        </Router>
      </div>
    </APIProvider>
  );
};

export default App;
