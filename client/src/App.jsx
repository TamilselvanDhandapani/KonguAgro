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
import DistrictPage from "./components/DistrictPage"; // The SEO page we created earlier

// All 38 Tamil Nadu Districts
const tnDistricts = [
  'ariyalur', 'chengalpattu', 'chennai', 'coimbatore', 'cuddalore', 
  'dharmapuri', 'dindigul', 'erode', 'kallakurichi', 'kanchipuram', 
  'kanyakumari', 'karur', 'krishnagiri', 'madurai', 'mayiladuthurai', 
  'nagapattinam', 'namakkal', 'nilgiris', 'perambalur', 'pudukkottai', 
  'ramanathapuram', 'ranipet', 'salem', 'sivaganga', 'tenkasi', 
  'thanjavur', 'theni', 'thoothukudi', 'tiruchirappalli', 'tirunelveli', 
  'tirupattur', 'tiruppur', 'tiruvallur', 'tiruvannamalai', 'tiruvarur', 
  'vellore', 'viluppuram', 'virudhunagar'
];

// 1. Create a Layout wrapper for persistent elements
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
      { 
        path: "service-areas/:districtName", 
        element: <DistrictPage />,
        // 3. This tells the compiler exactly which URLs to pre-render into HTML
        getStaticPaths: () => tnDistricts.map(district => `service-areas/${district}`)
      }
    ],
  },
];