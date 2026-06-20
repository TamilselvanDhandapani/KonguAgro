import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // SEO UPGRADE: Added for Navigation Schema
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaLeaf,
  FaSignInAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Added descriptive SEO titles to the nav items
  const navItems = [
    { name: "Home", link: "/", title: "KonguNadu Agro Products Home" },
    {
      name: "Products",
      link: "/products",
      title: "VISDHA Drip Irrigation Products & Pipes",
    },
    {
      name: "About Us",
      link: "/about",
      title: "About Our Gobichettipalayam Manufacturing",
    },
    { name: "Contact", link: "/contact", title: "Contact KonguNadu Agro" },
  ];

  // SEO UPGRADE: Explicit Navigation Schema for Google Sitelinks
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "SiteNavigationElement", "position": 1, "name": "Home", "url": "https://www.kongunaduagroproduct.com/" },
      { "@type": "SiteNavigationElement", "position": 2, "name": "VISDHA Products", "url": "https://www.kongunaduagroproduct.com/products" },
      { "@type": "SiteNavigationElement", "position": 3, "name": "About KAPS", "url": "https://www.kongunaduagroproduct.com/about" },
      { "@type": "SiteNavigationElement", "position": 4, "name": "Contact & Subsidy", "url": "https://www.kongunaduagroproduct.com/contact" }
    ]
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.25 },
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(navigationSchema)}
        </script>
      </Helmet>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        {/* SEO UPGRADE: Populated the Local SEO Top Banner with targeted keywords */}
        <div
          className={`w-full bg-[#14532d] text-white transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
          }`}
        >
         
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              title="KonguNadu Agro Products"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mr-3 bg-green-50 border border-green-100 overflow-hidden">
                {logo ? (
                  <img
                    src={logo}
                    alt="KonguNadu Agro Products - Drip Irrigation Gobichettipalayam"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <FaLeaf className="text-green-600 text-xl" />
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-[#14532d] leading-tight tracking-wide">
                  KonguNadu Agro
                </span>
                <span className="text-xs text-[#2f855a] font-medium">
                  Products
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  title={item.title}
                  className="px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-300 text-[#14532d]/80 hover:text-[#16a34a]"
                >
                  {item.name}
                </Link>
              ))}

              {/* SEO UPGRADE: Added nofollow to preserve PageRank from leaking to the internal portal */}
              <a
                href="http://82.29.160.52:8070/odoo/discuss"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="Employee Portal Login"
                className="ml-3 px-5 py-2.5 rounded-lg bg-[#14532d] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:bg-[#166534]"
              >
                Login
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Call Action for Mobile (Great for Local SEO Conversions) */}
              <a
                href="tel:+919962699988"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-green-50 text-green-700 border border-green-100"
                aria-label="Call KonguNadu Agro"
              >
                <FaPhoneAlt className="text-sm" />
              </a>

              {/* SEO UPGRADE: Added nofollow for mobile login portal link */}
              <a
                href="http://82.29.160.52:8070/odoo/discuss"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Portal Login"
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#16a34a] text-white text-xs font-semibold shadow"
              >
                <FaSignInAlt className="text-sm" />
              </a>

              <button
                onClick={toggleMenu}
                className="text-[#14532d] hover:text-[#16a34a] p-1 rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={toggleMenu}
                aria-hidden="true"
              />

              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-0 right-0 w-[300px] sm:w-[340px] h-full bg-white z-50 shadow-xl flex flex-col"
              >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <Link to="/" className="flex items-center" onClick={toggleMenu}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full mr-3 bg-green-50 border border-green-100 overflow-hidden">
                      {logo ? (
                        <img
                          src={logo}
                          alt="KonguNadu Agro Products Mobile Logo"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <FaLeaf className="text-green-600 text-lg" />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-lg font-extrabold text-[#14532d] leading-tight">
                        KONGU AGRO
                      </span>
                      <span className="text-xs text-[#2f855a] font-medium">
                        Products
                      </span>
                    </div>
                  </Link>

                  <button
                    onClick={toggleMenu}
                    className="p-1 text-[#14532d] hover:text-[#16a34a] rounded-full"
                    aria-label="Close menu"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col justify-between h-full py-6 overflow-y-auto">
                  <ul className="w-full">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="w-full"
                      >
                        <Link
                          to={item.link}
                          title={item.title}
                          onClick={toggleMenu}
                          className="block px-6 py-4 text-base text-center font-medium border-b border-gray-50 text-[#14532d]/80 hover:text-[#16a34a]"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="px-6 pt-6 space-y-3 pb-8">
                    <Link
                      to="/request-quote"
                      onClick={toggleMenu}
                      className="block w-full text-center px-4 py-3 rounded-lg bg-[#16a34a] text-white text-sm font-semibold shadow hover:bg-[#15803d] transition"
                    >
                      Request a Quote
                    </Link>

                    <a
                      href="tel:+919962699988"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#14532d] text-white text-sm font-semibold shadow hover:bg-[#166534] transition"
                    >
                      <FaPhoneAlt className="text-sm" />
                      Call Us Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;