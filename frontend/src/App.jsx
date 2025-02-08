import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/nav-bar';
import Home from './pages/Home';
import Map from './pages/Map'
import ClinicFinder from "./pages/ClinicFinder";
import './App.css'

const App = () => {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/map" element={<Map/>}/>
            <Route path="/clinics" element={<ClinicFinder/>}/>
        </Routes>
    </Router>
 );
}

export default App
