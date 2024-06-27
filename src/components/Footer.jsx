import React from "react";
import logo from "../assets/i2c-logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <hr className="my-10 border-gray-300 border-2" />
      <footer>
        <div className="container mx-auto py-6 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex justify-start mb-4 md:mb-0">
              <img src={logo} alt="logo" className="h-10" />
            </div>

            <nav className="flex justify-end">
              <Router>
                <div className="flex gap-3">
                  <Link className="py-1 text-pretty text-[#515151]" to="/FAQs">
                    FAQs
                  </Link>
                  <Link
                    className="py-1 text-pretty text-[#515151]"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                  <Link className="py-1 text-pretty text-[#515151]" to="/other">
                    Other
                  </Link>
                  <Link
                    className="bg-[#46B0E6] text-white rounded-full px-5 py-1 shadow-lg shadow-[#46B0E6]"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </div>
              </Router>
            </nav>
          </div>

          <p className=" md:pl-2 my-4 text-sm text-[#515151] text-center md:text-left">
            Copyright &copy; 2024 i2c inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
