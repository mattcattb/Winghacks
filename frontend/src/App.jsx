import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Map from './pages/Map'
import ClinicFinder from "./pages/ClinicFinder";
import Navbar from './components/nav-bar'
import './App.css'

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <main className="pt-20">

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/map" element={<Map/>}/>
              <Route path="/clinics" element={<ClinicFinder/>}/>
          </Routes>
        </main>

      </Router>
    </div>

 );
}

export default App
