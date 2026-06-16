import React from "react";
import { Helmet } from "react-helmet"; // Added for SEO Meta Tags
import { motion } from "framer-motion";
import { 
  FaTint, FaChartLine, FaLeaf, FaMoneyBillWave, FaWrench, FaFilter, FaTachometerAlt,
  FaMedal, FaCalendarAlt, FaSmile, FaBoxes, FaPercent,
  FaPhoneAlt, FaArrowRight, FaHeadset, FaClock, FaChalkboardTeacher,FaUsers,FaTools,FaSeedling 
} from "react-icons/fa";
import { GiValve } from "react-icons/gi";
import heroImg from "../assets/home2.png";
import aboutImg from "../assets/About.png";
import supportBg from "../assets/img1.png";

import pipeImg from "../assets/home3.png";
import dripAccessoriesImg from "../assets/home4.png";
import filtersImg from "../assets/home5.png";
import venturiImg from "../assets/Venturi.png";
import { Link } from "react-router-dom";

const Home = () => {
  // SEO Schema Markup targeting the Kongu Belt
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KonguNadu Agro Products",
    "image": heroImg,
    "description": "Premium drip irrigation systems, agriculture pipes, and farm accessories supplier based in Gobichettipalayam, serving Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gobichettipalayam",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Gobichettipalayam", "Erode", "Coimbatore", "Salem", "Karur", "Nilgiri", "Pollachi"
    ],
    "telephone": "+91-XXXXXXXXXX", // Add your phone number here
    "url": "https://www.yourwebsite.com" // Add your actual domain here
  };

  const features = [
    { icon: <FaTint className="text-3xl text-green-600" />, title: "Save Water", desc: "90-95% water efficiency with minimal evaporation and runoff." },
    { icon: <FaChartLine className="text-3xl text-green-600" />, title: "Boost Yield", desc: "Consistent moisture delivery for healthier crops and higher yields." },
    { icon: <FaLeaf className="text-3xl text-green-600" />, title: "Weed Suppression", desc: "Targeted watering prevents weed germination naturally." },
    { icon: <FaMoneyBillWave className="text-3xl text-green-600" />, title: "Cost Effective", desc: "Lower water bills, reduced labor, and minimal chemical runoff." },
  ];

  const products = [
    { image: pipeImg, name: "Agriculture Pipes", color: "bg-blue-100" },
    { image: dripAccessoriesImg, name: "Drip Accessories", color: "bg-green-100" },
    { image: filtersImg, name: "Irrigation Filters", color: "bg-orange-100" },
    { image: venturiImg, name: "Venturi Injectors", color: "bg-purple-100" },
  ];

  // Animation variants
  const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeInRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeInScale = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* SEO Helmet */}
      <Helmet>
        <title>Best Drip Irrigation in Erode, Coimbatore & Salem | KonguNadu Agro</title>
        <meta name="description" content="KonguNadu Agro Products in Gobichettipalayam offers premium drip irrigation systems for farms. Serving Erode, Coimbatore, Salem, Karur, Nilgiris & Pollachi." />
        <meta name="keywords" content="Drip irrigation Gobichettipalayam, Drip irrigation Erode, Micro irrigation Coimbatore, Farm irrigation Salem, Drip tape Nilgiris, Agriculture pipes Pollachi, KonguNadu Agro Products" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden">
          <img
            src={heroImg}
            alt="Drip irrigation system installation in a Tamil Nadu farm by KonguNadu Agro"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b2d]/85 via-[#123b3a]/55 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl text-white"
              >
                {/* Optimized H1 */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight uppercase text-center sm:text-left">
                  Premium Drip Irrigation
                  <br />
                  For the Kongu Region.
                </h1>

                {/* Localized Subtext */}
                <p className="mt-4 text-base sm:text-md lg:text-lg text-white/90 max-w-xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                  Based in <strong>Gobichettipalayam</strong>, we supply efficient micro-irrigation solutions for sustainable farming across <strong>Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi.</strong>
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition duration-300"
                  >
                    Explore Our Solutions
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center flex flex-col h-full"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInLeft} className="space-y-6">
              {/* Optimized H2 */}
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block pb-2">
                Welcome To Kongunadu Agro Products
                <span className="block text-xl sm:text-2xl text-green-700 mt-2 font-semibold">Top Irrigation Dealers in Gobichettipalayam</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-[-4px] left-0 h-1 bg-green-600 rounded-full"
                />
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed text-justify">
                Kongunadu Agro Products is a trusted name in the agricultural sector, offering high-quality agro-based products and solutions to farmers and agribusinesses. Established in Gobichettipalayam, the heart of Tamil Nadu's fertile Kongu region, we have grown into a reliable partner for farms across Erode, Coimbatore, and Salem seeking premium agricultural inputs and sustainable farming solutions.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed text-justify">
                Our range includes carefully sourced drip accessories, micro-irrigation systems, filters, and other agro-commodities that support farmer livelihoods. We ensure every farm from Karur to the Nilgiris gets the precise watering solutions needed to maximize crop yield while conserving water.
              </motion.p>

              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                <Link to="/products" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                  Discover Our Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInRight} className="relative">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Sustainable agriculture and drip irrigation supplied by Kongunadu Agro Products in Erode"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fafdfb]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Irrigation Products
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              High-quality micro-irrigation components supplying farms across Coimbatore, Pollachi, and the Kongu belt.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div key={index} variants={fadeInScale} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }} className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img 
                    src={product.image} 
                    alt={`${product.name} supplied by KonguNadu Agro for drip irrigation`}
                    className="w-full h-50% object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">Premium quality irrigation solution</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fafdfb] overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e7f4ea] text-[#2f7d4b] text-lg font-semibold mb-6">
              <span>Why Kongu Farmers Choose Us</span>
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-[#173c36]">Smart Irrigation,</span>
              <span className="bg-gradient-to-r from-[#2f7d4b] via-[#3f9c68] to-[#2d6f68] bg-clip-text text-transparent">
                Smarter Future
              </span>
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-6 text-lg text-[#5f6f68] max-w-2xl mx-auto">
              Revolutionizing agriculture in Tamil Nadu with precision drip irrigation systems that maximize yield while conserving every precious drop.
            </motion.p>
          </div>
          
          {/* Stats bar */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 lg:mt-20 bg-gradient-to-r from-[#173c36] to-[#205148] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#2d6f68] lg:divide-x divide-[#2d6f68]">
              {[
                { value: "15,000+", label: "Farms Served", icon: "🌱" },
                { value: "98%", label: "Customer Satisfaction", icon: "⭐" },
                { value: "500M+", label: "Gallons Saved", icon: "💧" },
                { value: "6+", label: "Districts Covered", icon: "📍" }
              ].map((stat, idx) => (
                <div key={idx} className="px-6 py-8 text-center group hover:bg-white/5 transition-colors">
                  <div className="text-3xl mb-2 opacity-80 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-[#b8d9cf] text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${supportBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#143a34]/95 via-[#1d4f48]/90 to-[#2d6f68]/90" />

        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Local Agricultural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9dd88d] via-[#cceaa9] to-[#8fd0c7]">
                Support Services
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/80 text-lg max-w-3xl mx-auto mt-5 mb-14">
              From expert consultation to after-installation assistance, our Gobichettipalayam team travels across the Kongu region to ensure your system performs flawlessly.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                { icon: <FaUsers className="text-3xl text-[#2f7d4b]" />, title: "Expert Consultation", desc: "Get crop-specific irrigation advice and system recommendations tailored to Tamil Nadu soils.", iconBg: "bg-gradient-to-br from-[#e8f5e9] to-[#d4efe0]" },
                { icon: <FaHeadset className="text-3xl text-[#2d6f68]" />, title: "Fast Response Support", desc: "Reliable help for troubleshooting and maintenance in Erode, Salem, and Coimbatore.", iconBg: "bg-gradient-to-br from-[#e0f2f1] to-[#c8e6e5]" },
                { icon: <FaTools className="text-3xl text-[#4d8c7c]" />, title: "Installation Guidance", desc: "Practical assistance for setup, spacing, filtration, and pressure management.", iconBg: "bg-gradient-to-br from-[#e6f3ef] to-[#d4e9e3]" },
                { icon: <FaSeedling className="text-3xl text-[#5d9f5c]" />, title: "Seasonal Optimization", desc: "Adjust flow and watering schedules to match seasonal crop and climate needs.", iconBg: "bg-gradient-to-br from-[#f1f8e9] to-[#e4f3df]" },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInScale} whileHover={{ y: -8, scale: 1.02 }} className="group relative">
                  <div className="h-full rounded-[1.75rem] bg-white p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#173c36] mb-4">{item.title}</h3>
                    <p className="text-[#63736c] leading-relaxed text-base mb-8">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;