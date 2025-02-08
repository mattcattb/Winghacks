import { Link } from "react-router-dom";
import '../style.css';
const Navbar = () => {
    return (
        <nav className={"nav"}>
            <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
            <Link to="/map" style={{color: "white", textDecoration: "none"}}>About</Link>
            <Link to="/contact" style={{color: "white", textDecoration: "none"}}>Contact</Link>
        </nav>
    )
}
export default Navbar;
