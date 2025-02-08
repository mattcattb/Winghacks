import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Map from './pages/Map'
import './App.css'

function App() {

  return (
    <Router>
        <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/map" elemt={<Map/>}/>
        </Routes>
    </Router>
 );
}

export default App
