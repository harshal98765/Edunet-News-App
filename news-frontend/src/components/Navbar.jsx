import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900 py-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300 ease-in-out">
            Navbar
          </a>
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-xl">
            <li>
              <a
                href="#home"
                className="text-white hover:text-blue-300 transition duration-300 ease-in-out hover:scale-110 transform"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#link"
                className="text-white hover:text-blue-400 transition duration-300 ease-in-out hover:scale-110 transform"
              >
                Link
              </a>
            </li>
            <li className="relative group">
              <a
                href="#dropdown"
                className="text-white hover:text-green-400 transition duration-300 ease-in-out hover:scale-110 transform"
              >
                Dropdown
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg">
                <li>
                  <a
                    href="#action"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition duration-300"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    href="#another-action"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-300 transition duration-300"
                  >
                    Another Action
                  </a>
                </li>
                <li>
                  <hr className="border-gray-600" />
                </li>
                <li>
                  <a
                    href="#something"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-red-300 transition duration-300"
                  >
                    Something Else
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#disabled"
                className="text-gray-500 cursor-not-allowed transition duration-300"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Login Button */}
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-gray-700 hover:text-yellow-400 hover:scale-110 transition duration-300 ease-in-out transform">
              Login
            </button>
            {/* Signup Button */}
            <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200 hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out transform">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
