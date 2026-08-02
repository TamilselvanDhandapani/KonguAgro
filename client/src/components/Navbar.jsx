import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBars,
  FaLeaf,
  FaPhoneAlt,
  FaSignInAlt,
  FaTimes,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const SITE_URL = "https://kongunaduagroproduct.com";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
      title: "KonguNadu Agro Products Home",
    },
    {
      name: "Products",
      link: "/products",
      title: "VISDHA Drip Irrigation Products and Pipes",
    },
    {
      name: "About Us",
      link: "/about",
      title: "About KonguNadu Agro Products",
    },
    {
      name: "Contact",
      link: "/contact",
      title: "Contact KonguNadu Agro Products",
    },
  ];

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: navItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.link === "/" ? "/" : item.link}`,
    })),
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((previousValue) => !previousValue);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.25,
      },
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
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-100 bg-white shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div
          className={`w-full overflow-hidden bg-[#14532d] text-white transition-all duration-300 ${
            isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
          }`}
        />

        <div className="mx-auto max-w-[1600px] px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10">
          <nav
            className="flex h-16 items-center justify-between sm:h-20"
            aria-label="Main navigation"
          >
            {/* Brand */}
            <Link
              to="/"
              className="flex min-w-0 items-center"
              title="KonguNadu Agro Products"
              aria-label="KonguNadu Agro Products home"
            >
              <div className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-green-100 bg-green-50 sm:mr-3 sm:h-12 sm:w-12">
                {logo ? (
                  <img
                    src={logo}
                    alt="KonguNadu Agro Products"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <FaLeaf className="text-lg text-green-600 sm:text-xl" />
                )}
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="whitespace-nowrap text-[13px] font-extrabold leading-tight tracking-wide text-[#14532d] sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  KonguNadu Agro
                </span>

                <span className="text-[10px] font-medium leading-tight text-[#2f855a] sm:text-xs">
                  Products
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  title={item.title}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#14532d]/80 transition-all duration-300 hover:bg-green-50 hover:text-[#16a34a] xl:px-4 xl:text-base 2xl:text-[17px]"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="http://82.29.160.52:8070/odoo/discuss"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="Employee Portal Login"
                className="ml-2 rounded-lg bg-[#14532d] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#166534] hover:shadow-lg xl:ml-3 xl:px-5 xl:text-sm"
              >
                Login
              </a>
            </div>

            {/* Mobile and tablet controls */}
            <div className="flex shrink-0 items-center gap-2 lg:hidden sm:gap-3">
              <a
                href="tel:+919962699988"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-100 bg-green-50 text-green-700 sm:h-10 sm:w-10"
                aria-label="Call KonguNadu Agro Products"
              >
                <FaPhoneAlt className="text-xs sm:text-sm" />
              </a>

              <a
                href="http://82.29.160.52:8070/odoo/discuss"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Employee portal login"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16a34a] text-white shadow sm:h-10 sm:w-10"
              >
                <FaSignInAlt className="text-sm sm:text-base" />
              </a>

              <button
                type="button"
                onClick={toggleMenu}
                className="flex h-9 w-9 items-center justify-center rounded-md text-[#14532d] transition hover:bg-green-50 hover:text-[#16a34a] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 sm:h-10 sm:w-10"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? (
                  <FaTimes className="text-xl sm:text-2xl" />
                ) : (
                  <FaBars className="text-xl sm:text-2xl" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.45,
                }}
                exit={{
                  opacity: 0,
                }}
                className="fixed inset-0 z-40 bg-black"
                onClick={closeMenu}
                aria-hidden="true"
              />

              <motion.div
                id="mobile-navigation"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed right-0 top-0 z-50 flex h-full w-[88vw] max-w-[360px] flex-col bg-white shadow-xl"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
              >
                <div className="flex items-center justify-between border-b border-gray-100 p-4 sm:p-5">
                  <Link
                    to="/"
                    className="flex min-w-0 items-center"
                    onClick={closeMenu}
                  >
                    <div className="mr-3 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-green-100 bg-green-50 sm:h-12 sm:w-12">
                      {logo ? (
                        <img
                          src={logo}
                          alt="KonguNadu Agro Products"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <FaLeaf className="text-lg text-green-600" />
                      )}
                    </div>

                    <div className="flex min-w-0 flex-col">
                      <span className="whitespace-nowrap text-base font-extrabold leading-tight text-[#14532d] sm:text-lg">
                        KONGU AGRO
                      </span>

                      <span className="text-[11px] font-medium text-[#2f855a] sm:text-xs">
                        Products
                      </span>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={closeMenu}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#14532d] transition hover:bg-green-50 hover:text-[#16a34a] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                    aria-label="Close navigation menu"
                  >
                    <FaTimes className="text-lg sm:text-xl" />
                  </button>
                </div>

                <div className="flex h-full flex-col justify-between overflow-y-auto py-5 sm:py-6">
                  <ul className="w-full">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.link}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        className="w-full"
                      >
                        <Link
                          to={item.link}
                          title={item.title}
                          onClick={closeMenu}
                          className="block border-b border-gray-50 px-6 py-3.5 text-center text-[15px] font-medium text-[#14532d]/80 transition hover:bg-green-50 hover:text-[#16a34a] sm:py-4 sm:text-base"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="space-y-3 px-5 pb-8 pt-6 sm:px-6">
                    <Link
                      to="/request-quote"
                      onClick={closeMenu}
                      className="flex w-full items-center justify-center rounded-lg bg-[#16a34a] px-4 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-[#15803d] sm:text-base"
                    >
                      Request a Quote
                    </Link>

                    <a
                      href="tel:+919962699988"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#14532d] px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#166534] sm:text-base"
                    >
                      <FaPhoneAlt className="text-sm sm:text-base" />
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