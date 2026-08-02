import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const SITE_URL = "https://kongunaduagroproduct.com";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      link: "/",
      title: "KonguNadu Agro Products home",
    },
    {
      name: "Products",
      link: "/products",
      title: "Explore VISDHA drip irrigation products",
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

  const products = [
    {
      name: "Agriculture Pipes",
      link: "/products#agriculture-pipes",
      title: "VISDHA inline, online and PVC irrigation pipes",
    },
    {
      name: "Drip Accessories",
      link: "/products#drip-accessories-emitters",
      title: "Drip irrigation fittings, valves and emitters",
    },
    {
      name: "Irrigation Filters",
      link: "/products#irrigation-filters",
      title: "Screen, disc and hydro cyclone irrigation filters",
    },
    {
      name: "Venturi Injectors",
      link: "/products",
      title: "Venturi injectors for agricultural irrigation systems",
    },
  ];

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 md:justify-start"
              title="KonguNadu Agro Products"
              aria-label="Go to KonguNadu Agro Products home page"
            >
              <img
                src={logo}
                alt="KonguNadu Agro Products logo"
                className="h-12 w-auto object-contain sm:h-14"
                itemProp="logo"
              />

              <div className="flex flex-col text-left">
                <span className="text-lg font-extrabold leading-tight tracking-wide text-[#14532d] sm:text-xl lg:text-[22px]">
                  KonguNadu Agro
                </span>
                <span className="text-xs font-medium text-[#2f855a] sm:text-sm">
                  Products
                </span>
              </div>
            </Link>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-[15px] md:mx-0">
              KonguNadu Agro Products manufactures the{" "}
              <strong>VISDHA</strong> range of drip irrigation and
              micro-irrigation products. Based in{" "}
              <strong>Gobichettipalayam</strong>, we serve farmers across
              Erode, Coimbatore, Salem, Karur, Nilgiris and Pollachi, with
              product guidance and PMKSY subsidy assistance for eligible
              farmers.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h2 className="mb-5 text-base font-bold text-[#173c36] sm:text-lg">
              Quick Links
            </h2>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    title={item.title}
                    className="inline-block text-sm text-gray-600 transition hover:text-green-600 sm:text-[15px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h2 className="mb-5 text-base font-bold text-[#173c36] sm:text-lg">
              Our Products
            </h2>

            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    title={item.title}
                    className="inline-block text-sm text-gray-600 transition hover:text-green-600 sm:text-[15px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className="text-center md:text-left"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta
              itemProp="name"
              content="KonguNadu Agro Products"
            />
            <meta itemProp="alternateName" content="KAPS" />
            <link itemProp="url" href={SITE_URL} />

            <h2 className="mb-5 text-base font-bold text-[#173c36] sm:text-lg">
              Contact Us
            </h2>

            <address
              className="space-y-4 text-sm not-italic text-gray-600 sm:text-[15px]"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-start justify-center gap-3 text-left md:justify-start">
                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-green-600"
                  aria-hidden="true"
                />

                <p className="max-w-sm leading-7">
                  <strong>KonguNadu Agro Products (KAPS)</strong>
                  <br />
                  <span itemProp="streetAddress">
                    345/2, Near Modachur Weekly Market, Vadugapalayam to
                    Tirupur Main Road, Modachur
                  </span>
                  ,
                  <br />
                  <span itemProp="addressLocality">Gobichettipalayam</span>,{" "}
                  <span itemProp="addressRegion">Tamil Nadu</span>{" "}
                  <span itemProp="postalCode">638476</span>,{" "}
                  <span itemProp="addressCountry">India</span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 md:justify-start">
                <FaPhoneAlt
                  className="shrink-0 text-green-600"
                  aria-hidden="true"
                />

                <a
                  href="tel:+919962699988"
                  itemProp="telephone"
                  className="break-all transition hover:text-green-600"
                  title="Call KonguNadu Agro Products"
                >
                  +91 99626 99988
                </a>
              </div>

              <div className="flex items-start justify-center gap-3 md:justify-start">
                <FaEnvelope
                  className="mt-1 shrink-0 text-green-600"
                  aria-hidden="true"
                />

                <a
                  href="mailto:kongunaduagroproduct@gmail.com"
                  itemProp="email"
                  className="break-all text-left transition hover:text-green-600"
                  title="Email KonguNadu Agro Products"
                >
                  kongunaduagroproduct@gmail.com
                </a>
              </div>
            </address>

            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                to="/request-quote"
                title="Request a drip irrigation quotation"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-green-700 sm:w-auto sm:text-[15px]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-xs text-gray-500 sm:px-6 sm:text-sm md:flex-row md:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} KonguNadu Agro Products. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
            <Link
              to="/privacy-policy"
              className="transition hover:text-green-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="transition hover:text-green-600"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;