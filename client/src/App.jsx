import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import RequestQuote from "./components/RequestQuote";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import About from "./components/About";
import FloatingQuoteButton from "./components/FloatingQuoteButton";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/Terms";



const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> {/* This renders the specific page content */}
      <FloatingQuoteButton />
      <Footer />
    </>
  );
};

// 2. Export a configuration array instead of <Routes>
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "request-quote", element: <RequestQuote /> },
      { path: "about", element: <About /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-conditions", element: <TermsConditions /> },
      
    ],
  },
];