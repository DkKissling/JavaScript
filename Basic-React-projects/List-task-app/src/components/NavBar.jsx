import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ loggedIn, logout, username, isDarkMode, setIsDarkMode }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    loggedIn && (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover-text-white hover-bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm-ml-6">
                <div className="flex space-x-4">
                  <Link to="/" className="hover-bg-gray-700 px-3 py-2 rounded-md text-2xl font-bold text-white">
                    Home
                  </Link>
                  <Link to="/contact" className="px-3 py-2 rounded-md text-2xl font-bold text-white">
                    Contact
                  </Link>
                  <Link to="/nueva_tarea" className="px-3 py-2 rounded-md text-2xl font-bold text-white">
                    Nueva Tarea
                  </Link>
                </div>
              </div>
            </div>

            {/* Dark Mode switch */}
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
            </label>

            {/* Profile dropdown */}
            <div className="flex items-center">
              <div className="relative ml-3">
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={toggleProfileDropdown}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
                {/* Profile dropdown menu */}
                {isProfileOpen && (
                  <div className="Profile_dropdown absolute right-0 z-10 mt-2 w-48 bg-white origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    <h4 href="#" className="block px-4 py-2 text-sm text-gray-700">
                      {username}
                    </h4>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700">
                      Settings
                    </Link>
                    <Link onClick={logout} className="block px-4 py-2 text-sm text-gray-700">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={`sm-hidden ${open ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/contact" className="hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/nueva_tarea" className="hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium">
              Nueva Tarea
            </Link>
          </div>
        </div>
      </nav>
    )
  );
}

export default Navbar;
