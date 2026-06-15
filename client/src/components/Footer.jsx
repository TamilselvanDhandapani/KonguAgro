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
    { name: "Home", link: "/", title: "KonguNadu Agro Home" },
    { name: "Products", link: "/products", title: "Drip Irrigation Products" },
    { name: "About Us", link: "/about", title: "About Our Manufacturing" },
    { name: "Contact", link: "/contact", title: "Contact Our Team" },
  ];

  const products = [
    { name: "Agriculture Pipes", link: "/products", title: "Inline and Online Drip Pipes" },
    { name: "Drip Accessories", link: "/products", title: "Drip Irrigation Fittings" },
    { name: "Irrigation Filters", link: "/products", title: "Screen, Disc, and Sand Filters" },
    { name: "Venturi Injectors", link: "/products", title: "Fertigation Venturi Systems" },
  ];

  return (
    <footer className="bg-white text-[#173c36] border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Bio */}
          <div>
            <Link to="/" className="flex items-center mb-5" title="KonguNadu Agro Products">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mr-3 bg-green-50 border border-green-100 overflow-hidden">
                {logo ? (
                  <img
                    src={logo}
                    alt="KonguNadu Agro Products Logo"
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
                  Products
                </span>
              </div>
            </Link>

            <p className="text-gray-600 leading-relaxed text-sm">
              Premium drip irrigation manufacturing. Proudly based in <strong>Gobichettipalayam</strong> and dedicated to serving the agricultural needs of farms across <strong>Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi</strong>.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 hover:text-white transition flex items-center justify-center text-[#14532d]"
                aria-label="Facebook KonguNadu Agro"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 hover:text-white transition flex items-center justify-center text-[#14532d]"
                aria-label="Instagram KonguNadu Agro"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 hover:text-white transition flex items-center justify-center text-[#14532d]"
                aria-label="YouTube KonguNadu Agro"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#173c36]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    title={item.title}
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
            <h3 className="text-lg font-bold mb-5 text-[#173c36]">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    title={item.title}
                    className="text-gray-600 hover:text-green-600 transition text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Crucial for Local SEO) */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#173c36]">
              Contact Us
            </h3>
            <address className="space-y-4 text-sm text-gray-600 not-italic">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-green-600 shrink-0" />
                <p>
                  <strong>KonguNadu Agro Products</strong><br />
                  No. 123, Irrigation Complex,<br />
                  Bhavani Main Road,<br />
                  Gobichettipalayam, Tamil Nadu 638452
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600 shrink-0" />
                <a
                  href="tel:+919962699988"
                  className="hover:text-green-600 transition"
                  title="Call KonguNadu Agro"
                >
                  +91 99626 99988
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-600 shrink-0" />
                <a
                  href="mailto:kongunaduagroproduct@gmail.com"
                  className="hover:text-green-600 transition"
                  title="Email KonguNadu Agro"
                >
                  kongunaduagroproduct@gmail.com
                </a>
              </div>
            </address>

            <Link
              to="/request-quote"
              title="Request Drip Irrigation Quote"
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
          <p>
            © {new Date().getFullYear()} KonguNadu Agro Products. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-green-600 transition"
            >
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-green-600 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;