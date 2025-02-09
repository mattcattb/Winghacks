import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <nav className="bg-[#1F0322] p-2 w-full top-0 left-0 fixed z-[100] shadow-[0_2px_5px_rgba(0,0,0,0.2)] flex">
  <Link
       to="/"
       className="flex-1 flex max-h-full p-4 items-center justify-center font-bold text-white text-2xl no-underline transition-all duration-300 hover:bg-[#AA7DCE] hover:text-[#1F0322]"
     >
  Home
  </Link>
  <Link
       to="/map"
       className="flex-1 flex items-center justify-center text-white font-bold text-2xl no-underline transition-all duration-300 hover:bg-[#AA7DCE] hover:text-[#1F0322]"
     >
  Map
  </Link>
  <Link
       to="/clinics"
       className="flex-1 flex items-center justify-center text-white font-bold text-2xl no-underline transition-all duration-300 hover:bg-[#AA7DCE] hover:text-[#1F0322]"
     >
  ClinicFinder
  </Link>
  </nav>
  );
  };

export default Navbar;
