import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaLeaf } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

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
    <header
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-md border-b border-gray-100"
      : "bg-white shadow-sm"
  }`}
>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mr-3 bg-green-50 border border-green-100 overflow-hidden">
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
              <span className="text-xl font-extrabold text-[#14532d] leading-tight tracking-wide">
                KonguAgro
              </span>
              <span className="text-xs text-[#2f855a] font-medium">
                Irrigation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-300 
                ${                  location.pathname === item.link
                    ? item.highlight
                      ? "text-[#16a34a] border-b-2 border-[#16a34a]"
                      : "text-[#14532d]"
                    : item.highlight
                    ? "text-[#14532d] hover:text-[#16a34a]"
                    : "text-[#14532d]/80 hover:text-[#14532d]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/request-quote"
              className="ml-4 px-5 py-2.5 rounded-lg bg-[#16a34a] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:bg-[#15803d]"
            >
              Request a Quote
            </Link>

           
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#16a34a] text-white text-xs font-semibold shadow"
            >
              <FaPhoneAlt className="text-sm" />
            </Link>

            <button
              onClick={toggleMenu}
              className="text-[#14532d] hover:text-[#16a34a] p-1 rounded-md focus:outline-none"
              aria-label="Toggle menu"
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
                        alt="DropSmart Irrigation Logo"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <FaLeaf className="text-green-600 text-lg" />
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-[#14532d] leading-tight">
                      DROPSMART
                    </span>
                    <span className="text-xs text-[#2f855a] font-medium">
                      Irrigation
                    </span>
                  </div>
                </Link>

                <button
                  onClick={toggleMenu}
                  className="p-1 text-[#14532d] hover:text-[#16a34a] rounded-full"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col justify-between h-full py-6">
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
                        onClick={toggleMenu}
                        className={`block px-6 py-4 text-base text-center font-medium border-b border-gray-50 ${
                          location.pathname === item.link
                            ? item.highlight
                              ? "text-[#16a34a]"
                              : "text-[#14532d]"
                            : item.highlight
                            ? "text-[#14532d] hover:text-[#16a34a]"
                            : "text-[#14532d]/80 hover:text-[#14532d]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="px-6 pt-6 space-y-3">
                  <Link
                    to="/request-quote"
                    onClick={toggleMenu}
                    className="block w-full text-center px-4 py-3 rounded-lg bg-[#16a34a] text-white text-sm font-semibold shadow hover:bg-[#15803d] transition"
                  >
                    Request a Quote
                  </Link>

                  <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#14532d] text-white text-sm font-semibold shadow hover:bg-[#166534] transition"
                  >
                    <FaPhoneAlt className="text-sm" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;