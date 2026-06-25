import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaIndustry,
  FaLeaf,
  FaLightbulb,
  FaAward,
  FaHistory,
  FaUsers,
  FaTint,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

import {
  MdPrecisionManufacturing,
  MdAgriculture,
} from "react-icons/md";

import {
  GiFarmer,
  GiSprout,
  GiWaterDrop,
} from "react-icons/gi";

import aboutImg from "../assets/story.png";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About KonguNadu Agro Products",
    url: "https://www.kongunaduagroproduct.com/about",
    description:
      "Learn about KonguNadu Agro Products, a drip irrigation manufacturer in Gobichettipalayam with over 40 years of experience serving farmers across the Kongu region of Tamil Nadu.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "KonguNadu Agro Products",
      alternateName: "KAPS",
      foundingDate: "1984",
      description:
        "Trusted drip irrigation manufacturer and agricultural supplier based in Gobichettipalayam, with over 40 years of experience.",
      brand: {
        "@type": "Brand",
        name: "VISDHA",
      },
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
      url: "https://www.kongunaduagroproduct.com/",
    },
  };

  const stats = [
    {
      value: "1984",
      label: "Year Founded",
      icon: <FaHistory className="text-2xl" />,
    },
    {
      value: "40+",
      label: "Years Experience",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      value: "2",
      label: "States Served",
      icon: <MdAgriculture className="text-2xl" />,
    },
    {
      value: "5000+",
      label: "Happy Farmers",
      icon: <GiFarmer className="text-2xl" />,
    },
  ];

  const timeline = [
    {
      year: "1984",
      title: "The Beginning",
      description:
        "Founded as SN Engineering Works in Gobichettipalayam, starting our journey in agricultural innovation with Gobar Gas systems.",
      icon: <FaHistory />,
      color: "from-emerald-400 to-green-600",
      bgColor: "bg-emerald-50",
    },
    {
      year: "1992",
      title: "Plastics Manufacturing",
      description:
        "Expanded into plastics manufacturing, laying the foundation for future irrigation products across the Kongu region.",
      icon: <MdPrecisionManufacturing />,
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      year: "2011",
      title: "Drip Irrigation Entry",
      description:
        "Entered the drip irrigation market with innovative water-saving solutions tailored for Erode and Coimbatore farmers.",
      icon: <FaLeaf />,
      color: "from-green-400 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      year: "2013",
      title: "Manufacturing Excellence",
      description:
        "Established a state-of-the-art manufacturing facility with advanced quality control systems to serve Salem, Karur, and Pollachi.",
      icon: <FaIndustry />,
      color: "from-orange-400 to-red-600",
      bgColor: "bg-orange-50",
    },
    {
      year: "2021",
      title: "Government Recognition",
      description:
        "VISDHA brand approved under Tamil Nadu PMKSY subsidy scheme, reaching more farmers from Nilgiris to deep South India.",
      icon: <FaAward />,
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-50",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      subtitle: "Pushing Boundaries",
      desc: "Continuously improving irrigation technology through modern manufacturing and R&D.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Sustainability",
      subtitle: "Eco-Friendly Focus",
      desc: "Promoting water-efficient farming practices for future generations.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Quality",
      subtitle: "Precision Manufacturing",
      desc: "Strict quality control and advanced testing for reliable agricultural products.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Trust",
      subtitle: "Building Relationships",
      desc: "40+ years of strong partnerships with local farmers and dealers.",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>
          About KonguNadu Agro Products | Drip Irrigation Manufacturer in Gobichettipalayam
        </title>

        <meta
          name="description"
          content="Learn about KonguNadu Agro Products, a trusted drip irrigation manufacturer in Gobichettipalayam with 40+ years of experience serving farmers across Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi."
        />

        <meta
          name="keywords"
          content="KonguNadu Agro Products history, drip irrigation manufacturer Gobichettipalayam, agricultural irrigation supplier Tamil Nadu, VISDHA irrigation products, Erode irrigation company, Coimbatore drip irrigation"
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.kongunaduagroproduct.com/about"
        />

        <meta
          property="og:title"
          content="About KonguNadu Agro Products | Drip Irrigation Manufacturer in Gobichettipalayam"
        />
        <meta
          property="og:description"
          content="Discover the story of KonguNadu Agro Products, a Gobichettipalayam-based drip irrigation manufacturer serving farmers across the Kongu region."
        />
        <meta
          property="og:url"
          content="https://www.kongunaduagroproduct.com/about"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-[#f8fcf8] via-white to-[#eef7f1]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#9ac80f]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2d6f68]/10 rounded-full blur-3xl" />

        <div className="absolute top-20 left-10 opacity-20 animate-bounce">
          <GiSprout className="text-5xl text-[#2f7d4b]" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-bounce delay-700">
          <GiWaterDrop className="text-5xl text-[#9ac80f]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#e8f5e9] text-[#2f7d4b] font-semibold shadow-md"
          >
            <MdPrecisionManufacturing />
            KonguNadu Agro Products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl md:text-7xl font-black tracking-tight"
          >
            <span className="text-[#173c36]">About </span>
            <span className="bg-gradient-to-r from-[#2f7d4b] to-[#9ac80f] bg-clip-text text-transparent">
              KonguNadu Agro
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-[#5f6f68]"
          >
            Driven by the vision of
            <span className="font-semibold text-[#2f7d4b]">
              {" "}
              "Irrigation Made Easy"
            </span>
            , we deliver innovative and reliable irrigation solutions empowering
            farmers across <strong>Gobichettipalayam, Erode, Coimbatore, Salem,
            Karur, Nilgiris, and Pollachi.</strong>
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-12 relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] border border-[#edf2ee] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 text-center border-b lg:border-b-0 lg:border-r border-[#edf2ee] last:border-r-0 group hover:bg-[#f8fcf8] transition"
              >
                <div className="flex justify-center text-[#9ac80f] mb-4 group-hover:scale-110 transition">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-[#173c36]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-[#5f6f68] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#9ac80f]/10 rounded-3xl" />
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#9ac80f] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <img
                  src={aboutImg}
                  alt="KonguNadu Agro Products facility and irrigation manufacturing operations in Gobichettipalayam"
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#173c36]">
                Our Story in Gobichettipalayam
              </h2>
              <div className="mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-[#9ac80f] to-[#2f7d4b]" />

              <p className="mt-6 text-[#5f6f68] leading-relaxed">
                KonguNadu Agro Products (KAPS) began its journey in 1984 as SN
                Engineering Works in the heart of Gobichettipalayam. Over four
                decades, we evolved from Gobar Gas systems into one of the trusted
                irrigation manufacturing brands in Tamil Nadu.
              </p>

              <p className="mt-5 text-[#5f6f68] leading-relaxed">
                Our expertise spans plastics manufacturing, drip irrigation
                systems, inline drip technology, micro irrigation components, and
                precision agriculture products designed for the soil, water, and
                climate conditions of the wider Kongu belt.
              </p>

              <p className="mt-5 text-[#5f6f68] leading-relaxed">
                Today, our <strong>VISDHA</strong> brand is recognized under the
                <strong> Tamil Nadu PMKSY government subsidy scheme</strong>,
                serving farmers across Erode, Coimbatore, Salem, Karur,
                Nilgiris, and Pollachi with reliable and sustainable irrigation
                solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-[#e8f5e9] text-[#173c36] flex items-center gap-2">
                  <FaAward className="text-[#9ac80f]" />
                  ISO Certified
                </div>
                <div className="px-4 py-2 rounded-full bg-[#e8f5e9] text-[#173c36] flex items-center gap-2">
                  <FaHandshake className="text-[#9ac80f]" />
                  Govt Approved Subsidy
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-[#f8fcf8] via-white to-[#f0f7f0] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#9ac80f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d6f68]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#173c36]">
              Our Journey in the Kongu Region
            </h2>
            <p className="mt-4 text-[#5f6f68] max-w-2xl mx-auto">
              From humble beginnings in Gobi to becoming a trusted name in
              irrigation solutions across Western Tamil Nadu.
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#9ac80f] to-[#2f7d4b] mx-auto rounded-full" />
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#9ac80f] via-[#2f7d4b] to-[#9ac80f] rounded-full" />
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`${item.bgColor} rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative group`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg shadow-lg mb-4`}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-[#173c36] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#5f6f68] leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl cursor-pointer relative`}
                    >
                      <div className="text-white text-2xl">{item.icon}</div>
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} animate-ping opacity-20`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9ac80f] via-[#2f7d4b] to-[#9ac80f] rounded-full" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-2 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}
                  >
                    <div className="text-white text-xl">{item.icon}</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${item.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm shadow-md mb-3`}
                    >
                      <span>{item.icon}</span>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#173c36] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#5f6f68] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#173c36]">
              Our Core Values
            </h2>
            <div className="mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-[#9ac80f] to-[#2f7d4b] mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group rounded-[2rem] bg-white border border-[#dce7c4] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#173c36]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#9ac80f]">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-[#5f6f68] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-br from-[#173c36] via-[#1d4b42] to-[#2d6f68] p-12 text-center shadow-[0_20px_50px_rgba(23,60,54,0.35)] relative overflow-hidden"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <FaUsers className="text-4xl text-white" />
            </div>

            <h2 className="text-4xl font-bold text-white">
              Join Our Growing Network
            </h2>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Partner with Gobichettipalayam&apos;s trusted irrigation manufacturer
              to bring efficient irrigation solutions to Erode, Coimbatore,
              Salem, and beyond.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2f7d4b] to-[#3f9c68] text-white font-semibold shadow-lg hover:scale-105 transition text-center inline-block"
              >
                Become a Dealer
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition text-center inline-block"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <FaHandshake className="text-[#9ac80f]" />
                Trusted Partnerships
              </span>
              <span className="flex items-center gap-2">
                <FaAward className="text-[#9ac80f]" />
                Govt Approved
              </span>
              <span className="flex items-center gap-2">
                <FaTint className="text-[#9ac80f]" />
                Water Saving Solutions
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;