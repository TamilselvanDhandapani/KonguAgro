import React from "react";
import { motion } from "framer-motion";
import { 
  FaTint, FaChartLine, FaLeaf, FaMoneyBillWave, FaWrench, FaFilter, FaTachometerAlt,
  FaMedal, FaCalendarAlt, FaSmile, FaBoxes, FaPercent,
  FaPhoneAlt, FaArrowRight, FaHeadset, FaClock, FaChalkboardTeacher,FaUsers,FaTools,FaSeedling 
} from "react-icons/fa";
import { GiValve } from "react-icons/gi";
import heroImg from "../assets/home2.png";
import aboutImg from "../assets/home1.png";
import supportBg from "../assets/img1.png"; // Add your support background image

// Import product images - Replace these with your actual image paths
import pipeImg from "../assets/home3.png";
import dripAccessoriesImg from "../assets/home4.png";
import filtersImg from "../assets/home5.png";
import venturiImg from "../assets/home2.png";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <FaTint className="text-3xl text-green-600" />,
      title: "Save Water",
      desc: "90-95% water efficiency with minimal evaporation and runoff.",
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Boost Yield",
      desc: "Consistent moisture delivery for healthier crops and higher yields.",
    },
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Weed Suppression",
      desc: "Targeted watering prevents weed germination naturally.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
      title: "Cost Effective",
      desc: "Lower water bills, reduced labor, and minimal chemical runoff.",
    },
  ];

  const products = [
    { image: pipeImg, name: "Pipe", color: "bg-blue-100" },
    { image: dripAccessoriesImg, name: "Drip Accessories", color: "bg-green-100" },
    { image: filtersImg, name: "Filters", color: "bg-orange-100" },
    { image: venturiImg, name: "Venturi", color: "bg-purple-100" },
  ];

  const stats = [
    { icon: <FaCalendarAlt />, value: "10+", label: "Years of Experience", suffix: "" },
    { icon: <FaSmile />, value: "1 lakh+", label: "Happy Customers", suffix: "" },
    { icon: <FaBoxes />, value: "12+", label: "Number of Products", suffix: "" },
    { icon: <FaPercent />, value: "100", label: "Quality", suffix: "%" },
  ];

  const supportFeatures = [
    { icon: <FaHeadset />, title: "Expert Consultation", desc: "Get professional advice from our experienced agricultural specialists" },
    { icon: <FaClock />, title: "24/7 Customer Support", desc: "Round-the-clock assistance for all your irrigation needs" },
    { icon: <FaChalkboardTeacher />, title: "Free Installation Demo", desc: "Learn proper installation techniques with our guided demos" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const parallaxVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden">
          <img
            src={heroImg}
            alt="Drip Irrigation"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b2d]/85 via-[#123b3a]/55 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight uppercase text-center sm:text-left">
                  The Smarter Way to
                  <br />
                  Water Your Crops.
                </h1>

                <p className="mt-4 text-base  sm:text-md lg:text-lg text-white/90 max-w-md leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                  Efficient Drip Irrigation Solutions for Sustainable Farming &
                  Increased Yields.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
               
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section with Right Side Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block"
              >
                Welcome To Kongunadu Agro Products
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-[-12px] left-0 h-1 bg-green-600 rounded-full"
                />
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed text-justify"
              >
                Kongunadu Agro Products is a trusted name in the agricultural sector, offering high-quality agro-based products and solutions to farmers and agribusinesses. Established in Gobichettipalayam, the heart of Tamil Nadu's fertile Kongu region, the enterprise has grown into a reliable partner for those seeking premium agricultural inputs, processed farm goods, and sustainable farming solutions. With deep roots in the region's rich agricultural heritage, Kongunadu Agro Products brings generations of farming wisdom combined with modern business practices.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed text-justify"
              >
                We recognize the vital role that agriculture plays in sustaining communities and economies, which is why we are committed to promoting sustainable and responsible farming practices. Our range includes carefully sourced seeds, organic fertilizers, coconut-based products, traditional rice varieties, and other agro-commodities that support both farmer livelihoods and consumer health. Every product we offer is selected with a focus on quality, authenticity, and environmental responsibility.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed text-justify"
              >
                At Kongunadu Agro Products, we believe in nurturing the land that nurtures us. Our commitment to excellence, fair trade, and customer satisfaction has made us a preferred choice for farmers, retailers, and households across the region.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link to="/products" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                  Discover Our Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image with Animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={aboutImg}
                  alt="Kongunadu Agro Products - Sustainable Farming"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                {/* Animated Overlay Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-green-100 rounded-full -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-100 rounded-full -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products Section - Updated with Images */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fafdfb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Products
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              High-quality irrigation products designed for efficiency and durability
            </motion.p>
          </motion.div>

          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
>
  {products.map((product, index) => (
    <motion.div
      key={index}
      variants={fadeInScale}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 ">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-50% object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Optional: Badge for featured products */}
        {product.featured && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 text-center">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          Premium quality irrigation solution
        </p>

        {/* Price - Added for better context */}
        {product.price && (
          <p className="text-green-600 font-bold text-lg mb-3">
            ${product.price}
          </p>
        )}

      
       
      </div>

      {/* Optional: Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fafdfb] overflow-hidden">
        {/* Modern abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#7bc47f]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d6f68]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#7bc47f]/5 to-[#2d6f68]/5 rounded-full blur-3xl" />
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #173c36 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section header with modern typography */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e7f4ea] text-[#2f7d4b] text-lg font-semibold mb-6 group cursor-default"
>
  {/* Decorative icon - optional enhancement */}
  <svg 
    className="w-5 h-5" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
  
  <span>Why Choose Us</span>
  
  {/* Underline animation */}
  <motion.div
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2f7d4b] rounded-full"
    animate={{ width: "70%" }}
    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
  />
</motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              <span className="text-[#173c36]">Smart Irrigation,</span>
              <span className="bg-gradient-to-r from-[#2f7d4b] via-[#3f9c68] to-[#2d6f68] bg-clip-text text-transparent">
                Smarter Future
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-[#5f6f68] max-w-2xl mx-auto"
            >
              Revolutionizing agriculture with precision drip irrigation systems that 
              maximize yield while conserving every precious drop
            </motion.p>
          </div>

          {/* Stats bar with modern design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 lg:mt-20 bg-gradient-to-r from-[#173c36] to-[#205148] rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#2d6f68] lg:divide-x divide-[#2d6f68]">
              {[
                { value: "15,000+", label: "Projects Completed", icon: "🌱" },
                { value: "98%", label: "Customer Satisfaction", icon: "⭐" },
                { value: "500M+", label: "Gallons Saved", icon: "💧" },
                { value: "24/7", label: "Expert Support", icon: "🎯" }
              ].map((stat, idx) => (
                <div key={idx} className="px-6 py-8 text-center group hover:bg-white/5 transition-colors">
                  <div className="text-3xl mb-2 opacity-80 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#b8d9cf] text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          />
        </div>
      </section>

      {/* OUR SPECIAL SUPPORT */}
      <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Fixed Background image with smooth scroll */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${supportBg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#143a34]/95 via-[#1d4f48]/90 to-[#2d6f68]/90" />

        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
                Premium Support
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            >
              Our Special
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9dd88d] via-[#cceaa9] to-[#8fd0c7]">
                Support Services
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg max-w-3xl mx-auto mt-5 mb-14"
            >
              From expert consultation to after-installation assistance, we stay with
              you at every stage to ensure your irrigation system performs at its best.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <FaUsers className="text-3xl text-[#2f7d4b]" />,
                  title: "Expert Consultation",
                  desc: "Get crop-specific irrigation advice and system recommendations from specialists.",
                  iconBg: "bg-gradient-to-br from-[#e8f5e9] to-[#d4efe0]",
                },
                {
                  icon: <FaHeadset className="text-3xl text-[#2d6f68]" />,
                  title: "Fast Response Support",
                  desc: "Reliable help for troubleshooting, guidance, and maintenance-related questions.",
                  iconBg: "bg-gradient-to-br from-[#e0f2f1] to-[#c8e6e5]",
                },
                {
                  icon: <FaTools className="text-3xl text-[#4d8c7c]" />,
                  title: "Installation Guidance",
                  desc: "Practical assistance for setup, spacing, filtration, and pressure management.",
                  iconBg: "bg-gradient-to-br from-[#e6f3ef] to-[#d4e9e3]",
                },
                {
                  icon: <FaSeedling className="text-3xl text-[#5d9f5c]" />,
                  title: "Seasonal Optimization",
                  desc: "Adjust flow and watering schedules to match seasonal crop and climate needs.",
                  iconBg: "bg-gradient-to-br from-[#f1f8e9] to-[#e4f3df]",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* White background card */}
                  <div className="h-full rounded-[1.75rem] bg-white p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center">
                    {/* Icon with colored background */}
                    <div
                      className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md mb-6`}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#173c36] mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#63736c] leading-relaxed text-base mb-8">
                      {item.desc}
                    </p>

                    
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute -inset-1 rounded-[1.9rem] bg-gradient-to-r from-[#2f7d4b] to-[#2d6f68] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10"
                  />
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