 



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
import { Link } from "react-router-dom";

import heroImg from "../assets/home2.png";
import aboutImg from "../assets/About.png";
import supportBg from "../assets/img1.png";
import pipeImg from "../assets/home3.png";
import dripAccessoriesImg from "../assets/home4.png";
import filtersImg from "../assets/home5.png";
import venturiImg from "../assets/Venturi.png";

const SITE_URL = "https://kongunaduagroproduct.com";

const BUSINESS_ADDRESS =
  "345/2, Near Modachur Weekly Market, Vadugapalayam to Tirupur Main Road, Modachur, Gobichettipalayam - 638476, Tamil Nadu";

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "KonguNadu Agro Products",
        alternateName: "KAPS",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        brand: {
          "@type": "Brand",
          name: "VISDHA",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "KonguNadu Agro Products",
        alternateName: "KAPS",
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/home2.png`,
        description:
          "KonguNadu Agro Products manufactures VISDHA drip irrigation and micro-irrigation products and provides irrigation product support and PMKSY subsidy guidance for eligible farmers in Tamil Nadu.",
        telephone: "+91-9962699988",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "345/2, Near Modachur Weekly Market, Vadugapalayam to Tirupur Main Road, Modachur",
          addressLocality: "Gobichettipalayam",
          addressRegion: "Tamil Nadu",
          postalCode: "638476",
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
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "KonguNadu Agro Products",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
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
    {
      image: pipeImg,
      name: "Agriculture Pipes",
    },
    {
      image: dripAccessoriesImg,
      name: "Drip Accessories",
    },
    {
      image: filtersImg,
      name: "Irrigation Filters",
    },
    {
      image: venturiImg,
      name: "Venturi Injectors",
    },
  ];

  const supportServices = [
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
  ];

  const statistics = [
    {
      value: "15,000+",
      label: "Farms Served",
      icon: "🌱",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      icon: "⭐",
    },
    {
      value: "100%",
      label: "Subsidy Guidance",
      icon: "📑",
    },
    {
      value: "6+",
      label: "Districts Covered",
      icon: "📍",
    },
  ];

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeInScale = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <Helmet>
        <title>
          Drip Irrigation Company in Gobichettipalayam | KonguNadu Agro Products
        </title>

        <meta
          name="description"
          content="KonguNadu Agro Products manufactures VISDHA drip irrigation and micro-irrigation products in Gobichettipalayam and supplies agriculture pipes, drip accessories, filters and venturi injectors across Tamil Nadu."
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large"
        />

        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta
          property="og:title"
          content="Drip Irrigation Company in Gobichettipalayam | KonguNadu Agro Products"
        />

        <meta
          property="og:description"
          content="VISDHA drip irrigation products, agriculture pipes, irrigation filters and irrigation support for farmers across Gobichettipalayam and the Kongu region."
        />

        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/home2.png`} />

        <meta
          property="og:image:alt"
          content="VISDHA drip irrigation products by KonguNadu Agro Products"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Drip Irrigation Company in Gobichettipalayam | KonguNadu Agro Products"
        />

        <meta
          name="twitter:description"
          content="VISDHA drip irrigation and micro-irrigation products for farmers across the Kongu region."
        />

        <meta
          name="twitter:image"
          content={`${SITE_URL}/home2.png`}
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero section */}
      <section className="relative w-full">
        <div className="relative h-[560px] overflow-hidden sm:h-[600px] lg:h-[680px]">
          <img
            src={heroImg}
            alt="Drip irrigation systems and agricultural irrigation support by KonguNadu Agro Products in Gobichettipalayam"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b2d]/90 via-[#123b3a]/70 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="mx-auto flex max-w-3xl flex-col items-center text-white lg:mx-0 lg:items-start"
              >
                <h1 className="text-center text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
                  Drip Irrigation Company in Gobichettipalayam
                </h1>

                <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-white/95 sm:text-lg lg:text-left lg:text-xl">
                  KonguNadu Agro Products (KAPS) manufactures{" "}
                  <strong>VISDHA</strong> drip irrigation and micro-irrigation
                  products for farmers across{" "}
                  <strong>
                    Gobichettipalayam, Erode, Coimbatore, Salem, Karur,
                    Nilgiris and Pollachi
                  </strong>
                  . We supply agriculture pipes and offer guidance for eligible{" "}
                  <strong>PMKSY subsidy applications</strong>.
                </p>

                {/* Centered below 1024px; left aligned on large screens */}
                <div className="mt-8 flex w-full justify-center lg:justify-start">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex w-full justify-center sm:w-auto lg:justify-start"
                  >
                    <Link
                      to="/products"
                      className="inline-flex w-full max-w-sm items-center justify-center rounded-lg bg-green-600 px-8 py-3.5 text-center font-semibold text-white shadow-md transition duration-300 hover:bg-green-700 sm:w-auto"
                    >
                      Explore Our Products
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative z-20 mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="flex-grow text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeInLeft}
              className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left"
            >
              <motion.h2
                variants={fadeInUp}
                className="relative inline-block pb-2 text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                Welcome to KonguNadu Agro Products

                <span className="mt-2 block text-xl font-semibold text-green-700 sm:text-2xl">
                  Drip Irrigation Products and Support in Gobichettipalayam
                </span>

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  className="absolute bottom-[-4px] left-1/2 h-1 -translate-x-1/2 rounded-full bg-green-600 lg:left-0 lg:translate-x-0"
                />
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="leading-relaxed text-gray-600 sm:text-justify lg:text-left"
              >
                <strong>KonguNadu Agro Products (KAPS)</strong> is a
                Gobichettipalayam-based irrigation products company serving
                farmers across the Kongu region of Tamil Nadu. We manufacture
                the <strong>VISDHA</strong> brand and supply practical drip
                irrigation solutions designed to improve water efficiency,
                crop health and farm productivity.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="leading-relaxed text-gray-600 sm:text-justify lg:text-left"
              >
                Our product range includes{" "}
                <strong>
                  agriculture pipes, drip accessories, irrigation filters,
                  venturi injectors and micro-irrigation components
                </strong>
                . We also assist eligible farmers with guidance related to the{" "}
                <strong>PMKSY drip irrigation subsidy scheme</strong>, helping
                customers in Erode, Coimbatore, Salem, Karur, Nilgiris and
                nearby areas choose suitable irrigation systems for their land.
              </motion.p>

              {/* Centered below 1024px; left aligned on large screens */}
              <motion.div
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex w-full justify-center pt-4 lg:justify-start"
              >
                <Link
                  to="/products"
                  className="inline-flex w-full max-w-sm items-center justify-center rounded-lg bg-green-600 px-8 py-3.5 text-center font-semibold text-white shadow-md transition duration-300 hover:bg-green-700 sm:w-auto"
                >
                  Discover Our Products
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeInRight}
              className="relative mx-auto w-full max-w-md lg:max-w-full"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={aboutImg}
                  loading="lazy"
                  decoding="async"
                  alt="Drip irrigation and sustainable agricultural products from KonguNadu Agro Products"
                  className="h-auto w-full rounded-2xl object-cover"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products section */}
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

      {/* Why choose us section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#fafdfb] px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center lg:mb-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative mb-6 inline-flex items-center gap-2 rounded-full bg-[#e7f4ea] px-4 py-2 text-lg font-semibold text-[#2f7d4b]"
            >
              <span>Why Kongu Farmers Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-[#173c36]">
                Smart Irrigation,
              </span>

              <span className="bg-gradient-to-r from-[#2f7d4b] via-[#3f9c68] to-[#2d6f68] bg-clip-text text-transparent">
                {" "}
                Smarter Future
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mx-auto mt-6 max-w-2xl text-lg text-[#5f6f68]"
            >
              Supporting agriculture in Tamil Nadu with drip irrigation systems
              that improve water management, crop care and long-term field
              efficiency.
            </motion.p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#173c36] to-[#205148] shadow-2xl lg:mt-20"
          >
            <div className="grid grid-cols-2 divide-x divide-y divide-[#2d6f68] lg:grid-cols-4 lg:divide-y-0">
              {statistics.map((stat) => (
                <div
                  key={stat.label}
                  className="group px-4 py-8 text-center transition-colors hover:bg-white/5 sm:px-6"
                >
                  <div className="mb-2 text-3xl opacity-80 transition-transform group-hover:scale-110">
                    {stat.icon}
                  </div>

                  <div className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                    {stat.value}
                  </div>

                  <div className="text-sm font-medium text-[#b8d9cf]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO content section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Drip Irrigation Products in Gobichettipalayam
            </h2>

            <div className="space-y-6 leading-8 text-gray-700 sm:text-justify lg:text-left">
              <p>
                <strong>KonguNadu Agro Products (KAPS)</strong> supplies drip
                irrigation and agricultural products from Gobichettipalayam,
                Tamil Nadu. We work with farmers across the Kongu region by
                supplying practical micro-irrigation products that help improve
                water efficiency, reduce wastage and support healthier crop
                growth. Our focus is on delivering dependable irrigation
                components that can be used on farms of different sizes and crop
                types.
              </p>

              <p>
                We manufacture and supply the <strong>VISDHA</strong> brand and
                offer a comprehensive range of irrigation products, including{" "}
                <strong>
                  agriculture pipes, drip accessories, irrigation filters,
                  venturi injectors and micro-irrigation components
                </strong>
                . Drip irrigation systems are widely preferred by farmers
                because they help deliver water closer to the root zone, reduce
                evaporation loss and support better fertilizer efficiency
                compared with conventional irrigation methods.
              </p>

              <p>
                Our business serves customers in{" "}
                <strong>
                  Gobichettipalayam, Erode, Coimbatore, Salem, Karur, Nilgiris
                  and Pollachi
                </strong>
                . Farmers looking for drip irrigation products often need more
                than just components. They also need guidance on selecting the
                right accessories, filter systems, venturi injectors and pipe
                configurations. We help customers understand the role of each
                component in a micro-irrigation setup so they can choose a
                practical and efficient system for long-term use.
              </p>

              <p>
                In addition to supplying irrigation products, KonguNadu Agro
                Products supports eligible farmers who want to understand the{" "}
                <strong>PMKSY drip irrigation subsidy process</strong>.
                Subsidy assistance and product guidance are especially
                important for growers adopting drip irrigation for the first
                time or upgrading existing systems.
              </p>

              <p>
                Visit us at <strong>{BUSINESS_ADDRESS}</strong>. You can also
                contact our team at{" "}
                <a
                  href="tel:+919962699988"
                  className="font-semibold text-green-700 hover:underline"
                >
                  +91 99626 99988
                </a>{" "}
                for product information and irrigation guidance.
              </p>

              <p>
                Whether you are looking for drip irrigation accessories,
                agriculture pipes, irrigation filters or venturi injectors in
                Gobichettipalayam and nearby districts, our goal is to provide
                products and support that match real farming needs. Explore our{" "}
                <Link
                  to="/products"
                  className="font-semibold text-green-700 hover:underline"
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

      {/* FAQ section */}
      <section className="bg-[#fafdfb] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                What irrigation products does KonguNadu Agro Products supply?
              </h3>

              <p className="leading-7 text-gray-700">
                KonguNadu Agro Products supplies agriculture pipes, drip
                accessories, irrigation filters, venturi injectors and other
                micro-irrigation products under the VISDHA brand.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Do you help farmers with PMKSY subsidy guidance?
              </h3>

              <p className="leading-7 text-gray-700">
                Yes. We provide guidance for eligible farmers who want to
                understand the PMKSY drip irrigation subsidy process and choose
                suitable irrigation products for their farms.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Which areas do you serve?
              </h3>

              <p className="leading-7 text-gray-700">
                We serve Gobichettipalayam, Erode, Coimbatore, Salem, Karur,
                Nilgiris, Pollachi and nearby agricultural areas in Tamil Nadu.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Why are irrigation filters and venturi injectors used in drip
                irrigation systems?
              </h3>

              <p className="leading-7 text-gray-700">
                Irrigation filters help protect drip systems by reducing
                clogging, while venturi injectors help deliver fertilizers
                through irrigation systems in a controlled manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
          style={{
            backgroundImage: `url(${supportBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#143a34]/95 via-[#1d4f48]/90 to-[#2d6f68]/90" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Local Agricultural

              <span className="block bg-gradient-to-r from-[#9dd88d] via-[#cceaa9] to-[#8fd0c7] bg-clip-text text-transparent">
                Support Services
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-14 mt-5 max-w-3xl px-4 text-lg text-white/80"
            >
              From PMKSY subsidy guidance to after-installation support, our
              Gobichettipalayam team helps farmers across the Kongu region
              choose and use irrigation systems more effectively.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {supportServices.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInScale}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative h-full"
                >
                  <div className="flex h-full flex-col items-center rounded-[1.75rem] bg-white p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:p-8">
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-md sm:h-20 sm:w-20 ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-[#173c36] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="flex-grow text-sm leading-relaxed text-[#63736c] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 flex w-full justify-center">
              <Link
                to="/products"
                className="inline-flex w-full max-w-sm items-center justify-center rounded-lg bg-green-600 px-8 py-3.5 text-center font-semibold text-white shadow-md transition duration-300 hover:bg-green-700 sm:w-auto"
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