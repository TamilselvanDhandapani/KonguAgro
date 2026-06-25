import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <FloatingQuoteButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;