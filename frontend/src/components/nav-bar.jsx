import { Link } from "react-router-dom";
import '../style.css';
const Navbar = () => {
    return (
        <nav className={"nav"}>
            <Link to="/" style={{color: "white", textDecoration: "none", fontSize: 24}}>Home</Link>
            <Link to="/map" style={{color: "white", textDecoration: "none",  fontSize: 24}}>Map</Link>
            <Link to="/clinics" style={{color: "white", textDecoration: "none",  fontSize: 24}}>ClinicFinder</Link>
        </nav>
    )
}
export default Navbar;
