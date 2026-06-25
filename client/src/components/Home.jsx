import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaTint,
  FaChartLine,
  FaLeaf,
  FaMoneyBillWave,
  FaHeadset,
  FaTools,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";
import heroImg from "../assets/home2.png";
import aboutImg from "../assets/About.png";
import supportBg from "../assets/img1.png";

import pipeImg from "../assets/home3.png";
import dripAccessoriesImg from "../assets/home4.png";
import filtersImg from "../assets/home5.png";
import venturiImg from "../assets/Venturi.png";
import { Link } from "react-router-dom";

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.kongunaduagroproduct.com/#organization",
        name: "KonguNadu Agro Products",
        alternateName: "KAPS",
        url: "https://www.kongunaduagroproduct.com/",
        logo: "https://www.kongunaduagroproduct.com/assets/logo.png",
        brand: {
          "@type": "Brand",
          name: "VISDHA",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.kongunaduagroproduct.com/#localbusiness",
        name: "KonguNadu Agro Products",
        alternateName: "KAPS",
        image: "https://www.kongunaduagroproduct.com/assets/home2.png",
        description:
          "KonguNadu Agro Products manufactures VISDHA drip irrigation and micro-irrigation products and supports farmers with irrigation solutions and PMKSY subsidy guidance in Tamil Nadu.",
        telephone: "+91-9962699988",
        url: "https://www.kongunaduagroproduct.com/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gobichettipalayam",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        areaServed: [
          "Gobichettipalayam",
          "Erode",
          "Coimbatore",
          "Salem",
          "Karur",
          "Nilgiris",
          "Pollachi",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.kongunaduagroproduct.com/#website",
        url: "https://www.kongunaduagroproduct.com/",
        name: "KonguNadu Agro Products",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What products does KonguNadu Agro Products supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KonguNadu Agro Products supplies agriculture pipes, drip accessories, irrigation filters, venturi injectors and micro-irrigation products under the VISDHA brand.",
        },
      },
      {
        "@type": "Question",
        name: "Does KonguNadu Agro Products support PMKSY subsidy guidance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. KonguNadu Agro Products assists eligible farmers with guidance related to PMKSY drip irrigation subsidy processes in Tamil Nadu.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas does KonguNadu Agro Products serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KonguNadu Agro Products serves Gobichettipalayam, Erode, Coimbatore, Salem, Karur, Nilgiris, Pollachi and nearby agricultural areas in Tamil Nadu.",
        },
      },
      {
        "@type": "Question",
        name: "Why are irrigation filters and venturi injectors important in drip irrigation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Irrigation filters help protect drip systems by reducing clogging, while venturi injectors are commonly used to apply fertilizers through irrigation systems in a controlled way.",
        },
      },
    ],
  };

  const features = [
    {
      icon: <FaTint className="text-3xl text-green-600" />,
      title: "Save Water",
      desc: "Drip irrigation helps deliver water closer to the root zone with less runoff and evaporation.",
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Boost Yield",
      desc: "Consistent moisture delivery supports healthier crop growth and better productivity.",
    },
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Better Field Efficiency",
      desc: "Targeted irrigation supports cleaner field management and efficient water use.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
      title: "Cost Effective",
      desc: "Efficient irrigation can help reduce water loss, labour strain and unnecessary input wastage.",
    },
  ];

  const products = [
    { image: pipeImg, name: "Agriculture Pipes", color: "bg-blue-100" },
    {
      image: dripAccessoriesImg,
      name: "Drip Accessories",
      color: "bg-green-100",
    },
    { image: filtersImg, name: "Irrigation Filters", color: "bg-orange-100" },
    { image: venturiImg, name: "Venturi Injectors", color: "bg-purple-100" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Helmet>
        <title>
          Drip Irrigation Systems in Gobichettipalayam | KonguNadu Agro Products
        </title>

        <meta
          name="description"
          content="KonguNadu Agro Products (KAPS) manufactures VISDHA drip irrigation and micro-irrigation products in Gobichettipalayam. We supply agriculture pipes, drip accessories, irrigation filters and venturi injectors across Erode, Coimbatore, Salem, Karur, Nilgiris and Pollachi, with PMKSY subsidy guidance for eligible farmers."
        />

        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href="https://www.kongunaduagroproduct.com/" />

        <meta
          property="og:title"
          content="Drip Irrigation Systems in Gobichettipalayam | KonguNadu Agro Products"
        />
        <meta
          property="og:description"
          content="VISDHA drip irrigation products, agriculture pipes, irrigation filters and subsidy guidance for farmers across Gobichettipalayam and the Kongu region."
        />
        <meta
          property="og:url"
          content="https://www.kongunaduagroproduct.com/"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden">
          <img
            src={heroImg}
            alt="Drip irrigation systems and agricultural irrigation support by KonguNadu Agro Products in Gobichettipalayam"
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
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight uppercase text-center sm:text-left">
                  Drip Irrigation Systems in Gobichettipalayam for Farms Across
                  the Kongu Region
                </h1>

                <p className="mt-4 text-base sm:text-md lg:text-lg text-white/90 max-w-xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                  KonguNadu Agro Products (KAPS) manufactures{" "}
                  <strong>VISDHA</strong> drip irrigation and micro-irrigation
                  products for farmers in{" "}
                  <strong>
                    Gobichettipalayam, Erode, Coimbatore, Salem, Karur, Nilgiris
                    and Pollachi
                  </strong>
                  . We supply agriculture pipes, drip accessories, irrigation
                  filters and venturi injectors, with guidance for eligible{" "}
                  <strong>PMKSY subsidy applications</strong>.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/products"
                      className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition duration-300 inline-block"
                    >
                      Explore Our Products
                    </Link>
                  </motion.div>
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
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block pb-2"
              >
                Welcome to KonguNadu Agro Products
                <span className="block text-xl sm:text-2xl text-green-700 mt-2 font-semibold">
                  Drip Irrigation and Agro Products in Gobichettipalayam
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-[-4px] left-0 h-1 bg-green-600 rounded-full"
                />
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed text-justify"
              >
                <strong>KonguNadu Agro Products (KAPS)</strong> is a
                Gobichettipalayam-based agro products and irrigation company
                serving farmers across the Kongu region of Tamil Nadu. We
                manufacture the <strong>VISDHA</strong> brand and supply
                practical drip irrigation solutions designed to improve water
                efficiency, crop health and farm productivity for a wide range
                of crops and field conditions.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed text-justify"
              >
                Our product range includes{" "}
                <strong>
                  agriculture pipes, drip accessories, irrigation filters,
                  venturi injectors and micro-irrigation components
                </strong>
                . We also assist eligible farmers with guidance related to the{" "}
                <strong>PMKSY drip irrigation subsidy scheme</strong>, helping
                customers in Erode, Coimbatore, Salem, Karur, Nilgiris and
                nearby areas choose suitable irrigation systems for their land,
                crop type and water requirements.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link
                  to="/products"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300 inline-block"
                >
                  Discover Our Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
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
                  alt="Drip irrigation and sustainable agricultural products from KonguNadu Agro Products"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
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
              Our Irrigation Products
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Explore our range of drip irrigation and micro-irrigation
              products, including agriculture pipes, drip accessories,
              irrigation filters and venturi injectors used by farmers across
              Gobichettipalayam, Erode, Coimbatore, Salem and surrounding
              districts.
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
                <Link
                  to="/products"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${product.name}`}
                />

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={`${product.name} supplied by KonguNadu Agro Products for drip irrigation systems`}
                    className="w-full h-50% object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 text-center relative z-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Quality irrigation solutions for modern agriculture
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              View All Irrigation Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fafdfb] overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e7f4ea] text-[#2f7d4b] text-lg font-semibold mb-6"
            >
              <span>Why Kongu Farmers Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              <span className="text-[#173c36]">Smart Irrigation,</span>
              <span className="bg-gradient-to-r from-[#2f7d4b] via-[#3f9c68] to-[#2d6f68] bg-clip-text text-transparent">
                {" "}
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
              Supporting agriculture in Tamil Nadu with drip irrigation systems
              that improve water management, crop care and long-term field
              efficiency.
            </motion.p>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 lg:mt-20 bg-gradient-to-r from-[#173c36] to-[#205148] rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#2d6f68] lg:divide-x">
              {[
                { value: "15,000+", label: "Farms Served", icon: "🌱" },
                { value: "98%", label: "Customer Satisfaction", icon: "⭐" },
                { value: "100%", label: "Subsidy Guidance", icon: "📑" },
                { value: "6+", label: "Districts Covered", icon: "📍" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="px-6 py-8 text-center group hover:bg-white/5 transition-colors"
                >
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
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Drip Irrigation Products and Agricultural Support in
              Gobichettipalayam
            </h2>

            <div className="space-y-5 text-gray-700 leading-8 text-justify">
              <p>
                KonguNadu Agro Products (KAPS) is a trusted name in drip
                irrigation and agricultural product supply in Gobichettipalayam,
                Tamil Nadu. We work with farmers across the Kongu region by
                supplying practical micro-irrigation products that help improve
                water efficiency, reduce wastage and support healthier crop
                growth. Our focus is on delivering dependable irrigation
                components that can be used in farms of different sizes and crop
                types, while also guiding customers in selecting suitable
                systems for their land and water conditions.
              </p>

              <p>
                We manufacture and supply the <strong>VISDHA</strong> brand and
                offer a range of irrigation products including{" "}
                <strong>
                  agriculture pipes, drip accessories, irrigation filters,
                  venturi injectors and micro-irrigation components
                </strong>
                . These products are used in farming applications where
                controlled water delivery is important for crop productivity and
                resource management. Drip irrigation systems are widely
                preferred by farmers because they help deliver water closer to
                the root zone, reduce evaporation loss and support better
                fertilizer efficiency compared with conventional irrigation
                methods.
              </p>

              <p>
                Our business serves customers in{" "}
                <strong>
                  Gobichettipalayam, Erode, Coimbatore, Salem, Karur, Nilgiris
                  and Pollachi
                </strong>
                , along with nearby agricultural areas in Tamil Nadu. Farmers
                looking for drip irrigation products often need more than just
                components — they also need guidance on selecting the right
                accessories, filter systems, venturi injectors and pipe
                configurations for the crops they grow. We help customers
                understand the role of each component in a micro-irrigation
                setup so they can choose a practical and efficient system for
                long-term use.
              </p>

              <p>
                In addition to supplying irrigation products, KonguNadu Agro
                Products also supports eligible farmers who want to understand
                the <strong>PMKSY drip irrigation subsidy process</strong>.
                Subsidy assistance and product guidance are especially important
                for growers who are adopting drip irrigation for the first time
                or upgrading existing systems. By combining local agricultural
                understanding with a practical product range, we aim to make
                irrigation planning easier for farmers who want reliable water
                management solutions in the Kongu region.
              </p>

              <p>
                Whether you are looking for drip irrigation accessories,
                agriculture pipes, irrigation filters or venturi injectors in
                Gobichettipalayam and nearby districts, our goal is to provide
                products and support that match real farming needs. If you want
                to explore our complete range of irrigation products, visit our{" "}
                <Link
                  to="/products"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Products page
                </Link>{" "}
                or contact our team for assistance in choosing the right
                irrigation setup for your farm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#fafdfb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What products does KonguNadu Agro Products supply?
              </h3>
              <p className="text-gray-700 leading-7">
                We supply agriculture pipes, drip accessories, irrigation
                filters, venturi injectors and micro-irrigation products under
                the VISDHA brand for agricultural use.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do you help farmers with PMKSY subsidy guidance?
              </h3>
              <p className="text-gray-700 leading-7">
                Yes. We provide guidance for eligible farmers who want to
                understand the PMKSY drip irrigation subsidy process and choose
                suitable irrigation products for their farms.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Which areas do you serve?
              </h3>
              <p className="text-gray-700 leading-7">
                We serve Gobichettipalayam, Erode, Coimbatore, Salem, Karur,
                Nilgiris, Pollachi and nearby agricultural areas in Tamil Nadu.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Why are irrigation filters and venturi injectors used in drip
                irrigation systems?
              </h3>
              <p className="text-gray-700 leading-7">
                Irrigation filters help protect drip systems by reducing
                clogging, while venturi injectors help deliver fertilizers
                through irrigation systems in a controlled manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${supportBg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
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
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            >
              Local Agricultural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9dd88d] via-[#cceaa9] to-[#8fd0c7]">
                Support Services
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg max-w-3xl mx-auto mt-5 mb-14"
            >
              From PMKSY subsidy guidance to after-installation support, our
              Gobichettipalayam team helps farmers across the Kongu region
              choose and use irrigation systems more effectively.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <FaUsers className="text-3xl text-[#2f7d4b]" />,
                  title: "Expert Consultation",
                  desc: "Get practical irrigation guidance and product recommendations suited to your crop and farm conditions.",
                  iconBg: "bg-gradient-to-br from-[#e8f5e9] to-[#d4efe0]",
                },
                {
                  icon: <FaHeadset className="text-3xl text-[#2d6f68]" />,
                  title: "Subsidy Guidance",
                  desc: "Support for eligible farmers who need help understanding PMKSY drip irrigation subsidy-related processes.",
                  iconBg: "bg-gradient-to-br from-[#e0f2f1] to-[#c8e6e5]",
                },
                {
                  icon: <FaTools className="text-3xl text-[#4d8c7c]" />,
                  title: "Installation Support",
                  desc: "Practical help with system setup, filtration planning, spacing and basic irrigation component guidance.",
                  iconBg: "bg-gradient-to-br from-[#e6f3ef] to-[#d4e9e3]",
                },
                {
                  icon: <FaSeedling className="text-3xl text-[#5d9f5c]" />,
                  title: "Seasonal Optimization",
                  desc: "Guidance to help farmers adjust irrigation practices based on crop type, season and field requirements.",
                  iconBg: "bg-gradient-to-br from-[#f1f8e9] to-[#e4f3df]",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="h-full rounded-[1.75rem] bg-white p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col items-center">
                    <div
                      className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md mb-6`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#173c36] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#63736c] leading-relaxed text-base mb-8">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Explore Products & Irrigation Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
