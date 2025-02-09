import { Link } from "react-router-dom";
import "../style.css";
const Navbar = () => {
  return (
    <nav className="bg-purple-800 py-6 px-8 flex items-center justify-between">
      <Link
        className="text-white text-4xl font-bold ml-[200px] mr-[300px]"
        to="/"
        style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <div className="flex space-x-6 mr-[200px] text-2xl">
        <Link
          to="/map"
          className={`text-white hover:text-gray-300 transition duration-300 ${
            location.pathname === "/map" ? "font-bold" : "" // Highlight if active
          }`}>
          Map
        </Link>
        <Link to="/clinics" 
              className={`text-white hover:text-gray-300 transition duration-300 ${
                location.pathname === "/clinics" ? "font-bold" : "" // Highlight if active
              }`}
        >
          ClinicFinder
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
