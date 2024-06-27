import React, { useState } from "react";
import logo from "../assets/i2c-logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" ">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        <nav className="hidden md:flex md:items-center md:justify-end">
          <Router>
            <div className="flex gap-4">
              <Link
                className="py-1 text-gray-600 hover:text-gray-900"
                to="/about-us"
              >
                About Us
              </Link>
              <Link
                className="py-1 text-gray-600 hover:text-gray-900"
                to="/registration"
              >
                Registration
              </Link>
              <Link
                className="py-1 text-gray-600 hover:text-gray-900"
                to="/contact-us"
              >
                Contact Us
              </Link>
              <Link
                className="bg-blue-500 text-white rounded-full px-8 py-1 shadow-lg hover:bg-blue-600 transition duration-300"
                to="/careers"
              >
                Careers
              </Link>
            </div>
          </Router>
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-2">
          <Router>
            <div className="flex flex-col items-center">
              <Link
                className="py-2 text-gray-600 hover:text-gray-900"
                to="/about-us"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                className="py-2 text-gray-600 hover:text-gray-900"
                to="/registration"
                onClick={toggleMenu}
              >
                Registration
              </Link>
              <Link
                className="py-2 text-gray-600 hover:text-gray-900"
                to="/contact-us"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link
                className="block bg-blue-500 text-white rounded-full px-6 py-2 mt-4 shadow-lg hover:bg-blue-600 transition duration-300"
                to="/careers"
                onClick={toggleMenu}
              >
                Careers
              </Link>
            </div>
          </Router>
        </div>
      )}
    </header>
  );
};

export default Header;
