import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingQuoteButton = () => {
  return (
    <Link
      to="/request-quote"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#16a34a] text-white text-sm font-semibold shadow-lg hover:bg-[#15803d] transition-all"
    >
      <FaFileAlt className="text-sm" />
      <span className="hidden sm:inline">Request a Quote</span>
    </Link>
  );
};

export default FloatingQuoteButton;