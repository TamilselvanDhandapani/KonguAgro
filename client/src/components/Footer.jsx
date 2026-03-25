import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLeaf,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "Products", link: "/products" },
    { name: "Resources", link: "/resources" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const products = [
    { name: "Pipe", link: "/products" },
    { name: "Drip Accessories", link: "/products" },
    { name: "Filters", link: "/products" },
    { name: "Venturi", link: "/products" },
  ];

  return (
    <footer className="bg-white text-[#173c36] border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mr-3 bg-green-50 border border-green-100 overflow-hidden">
                {logo ? (
                  <img
                    src={logo}
                    alt="DropSmart Irrigation Logo"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <FaLeaf className="text-green-600 text-xl" />
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-wide text-[#14532d]">
                  KonguAgro
                </span>
                <span className="text-sm text-[#2f855a] font-medium">
                  Irrigation
                </span>
              </div>
            </Link>

            <p className="text-gray-600 leading-relaxed text-sm">
              Smart drip irrigation solutions designed to conserve water,
              improve crop health, and support sustainable farming practices.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 hover:text-white transition flex items-center justify-center text-[#14532d]"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 hover:text-white transition flex items-center justify-center text-[#14532d]"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 hover:text-white transition flex items-center justify-center text-[#14532d]"
                aria-label="YouTube"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#173c36]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-green-600 transition text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#173c36]">Our Products</h3>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-green-600 transition text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#173c36]">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-green-600" />
                <p>
                  Gobichettipalayam, Tamil Nadu
                  <br />
                  India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600" />
                <a href="tel:+919999999999" className="hover:text-green-600 transition">
                  +91 99999 99999
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-600" />
                <a
                  href="mailto:info@dropsmart.com"
                  className="hover:text-green-600 transition"
                >
                  info@dropsmart.com
                </a>
              </div>
            </div>

            <Link
              to="/request-quote"
              className="inline-block mt-6 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold shadow-md transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DropSmart Irrigation. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-green-600 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-green-600 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;