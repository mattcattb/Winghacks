import { Link } from "react-router-dom";
import '../style.css';
const Navbar = () => {
    return (
        <nav className={"nav"}>
            <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
            <Link to="/map" style={{color: "white", textDecoration: "none"}}>Map</Link>
            <Link to="/contact" style={{color: "white", textDecoration: "none"}}>Hawk Tuah!</Link>
        </nav>
    )
}
export default Navbar;
