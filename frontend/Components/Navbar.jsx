import { NavLink } from "react-router-dom";
import { Heart, Home, LucideShoppingCart, Notebook, Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-blue-950 flex justify-between items-center h-16 px-5">

        <h1 className="text-xl font-bold text-white">..SHOPHERE..</h1>

        <div className="h-10 w-2xl bg-white rounded-sm relative">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full h-full p-2 text-blue-900 focus:outline-none"
          />
          <button className="absolute right-1 top-1 text-blue-900 p-1 rounded-full hover:bg-gray-300">
            <Search />
          </button>
        </div>

        <div className="text-white hidden md:flex space-x-10">
          
          {/* <NavLink to="/" className="hover:text-gray-400 text-lg font-bold flex items-center gap-2">
            <Home className="h-5 w-5" />
            Home
          </NavLink> */}

          <NavLink to="/home" className="hover:text-gray-400 text-lg font-bold flex items-center gap-2">
            <Notebook className="h-5 w-5" />
            Home
          </NavLink>

          <NavLink to="/home/cart" className="hover:text-gray-400 text-lg font-bold flex items-center gap-2">
            <LucideShoppingCart className="h-5 w-5" />
            Cart
          </NavLink>

          <NavLink to="/home/like" className="hover:text-gray-400 text-lg font-bold flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Like
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;