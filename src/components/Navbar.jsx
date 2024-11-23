import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiMagento } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState({
    username: "User",
    email: "user@example.com",
    profileImage: null
  });
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    // Add any logout logic here
    setUser(null);
    navigate("/login");
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-32 py-4 bg-zinc-800 shadow-sm sticky top-0 z-50 text-white  border-b-2 border-black">
      <Link to="/dashboard" className="flex items-center space-x-2">
        <SiMagento className="w-8 h-8" />
        <h1 className="text-xl font-bold text-white">Site Manager</h1>
      </Link>

      <div className="relative">
        <div
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FaUserCircle className="h-6 w-6 text-gray-600" />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-72 md:w-96 bg-zinc-900 rounded-md shadow-lg overflow-hidden z-50">
            <div className="flex flex-col items-center pt-6 pb-4 border-b border-zinc-700">
              <img
                src={user?.profileImage || "https://via.placeholder.com/150"}
                alt="Profile"
                className="h-20 w-20 rounded-full shadow-md mb-4 border-2 border-blue-500"
              />
              <h1 className="text-lg font-semibold text-white mb-1">
                {user?.username}
              </h1>
              <span className="text-sm text-gray-400">{user?.email}</span>
            </div>
            <div className="py-2">
              <Link
                to="/account"
                className="block mx-4 my-2 px-4 py-2 text-sm text-center text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Manage Account
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-sm text-red-400 hover:bg-zinc-800 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
            <div className="bg-zinc-900 py-2 text-center border-t border-zinc-700">
              <h1 className="text-sm text-gray-400">Site Manager</h1>
            </div>
            <div className="flex justify-center gap-5 py-2 text-sm text-gray-400 bg-zinc-900 border-t border-zinc-700">
              <Link to="/terms" className="hover:text-blue-500">Terms & condition</Link>
              <Link to="/privacy" className="hover:text-blue-500">Privacy</Link>
              <Link to="/support" className="hover:text-blue-500">Support</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;