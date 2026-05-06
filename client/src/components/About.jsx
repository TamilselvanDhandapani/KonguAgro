import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaLeaf, FaLightbulb, FaAward, FaHistory, FaChartLine, FaUsers } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import aboutImg from "../assets/home1.png";
import historyImg from "../assets/home2.png";

const About = () => {
  const stats = [
    { value: "1984", label: "Year Founded" },
    { value: "40+", label: "Years Experience" },
    { value: "2", label: "States Served" },
    { value: "5000+", label: "Happy Farmers" },
  ];

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const timeline = [
    {
      year: "1984",
      title: "The Beginning",
      text: "Started as SN Engineering Works with Gobar Gas plant in Erode district, laying the foundation for agricultural innovation.",
      icon: <FaHistory className="text-2xl" />,
    },
    {
      year: "1992",
      title: "Plastics Manufacturing",
      text: "Entered plastic manufacturing with water pots and became a leading supplier in the Kongu region.",
      icon: <MdPrecisionManufacturing className="text-2xl" />,
    },
    {
      year: "2011",
      title: "Drip Irrigation Entry",
      text: "Expanded into drip irrigation as a trading business, recognizing the growing need for efficient water management.",
      icon: <FaLeaf className="text-2xl" />,
    },
    {
      year: "2013–2019",
      title: "Manufacturing Excellence",
      text: "Launched own manufacturing: Inline drip (2013), injection moulding (2017), and flat drip systems (2019).",
      icon: <FaIndustry className="text-2xl" />,
    },
    {
      year: "2021",
      title: "Government Recognition",
      text: "Recognized under Tamil Nadu Govt subsidy scheme with our trusted brand VISDHA.",
      icon: <FaAward className="text-2xl" />,
    },
  ];

  const values = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      subtitle: "Pushing Boundaries",
      desc: "Continuously improving irrigation technology through R&D and modern manufacturing processes.",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Sustainability",
      subtitle: "Eco-Friendly Focus",
      desc: "Promoting water-efficient farming practices that protect natural resources for future generations.",
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Quality",
      subtitle: "Precision Manufacturing",
      desc: "Strict quality control, advanced testing facilities, and adherence to international standards.",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Trust",
      subtitle: "Building Relationships",
      desc: "Over 40 years of building long-term partnerships with farmers, dealers, and the agricultural community.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fcf8] via-white to-[#eef7f1]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#7bc47f]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2d6f68]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f5e9] text-[#2f7d4b] text-sm font-semibold mb-6"
          >
            <MdPrecisionManufacturing className="text-lg" />
            Kongunadu Agro Products (KAPS)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-[#173c36]">About </span>
            <span className="bg-gradient-to-r from-[#2f7d4b] via-[#3f9c68] to-[#2d6f68] bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-[#5f6f68] max-w-3xl mx-auto leading-relaxed"
          >
            Driven by the vision "Irrigation Made Easy," we combine decades of 
            manufacturing expertise with cutting-edge technology to deliver 
            reliable drip irrigation solutions that empower farmers across 
            Tamil Nadu and Karnataka.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#edf2ee] overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#edf2ee]">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="px-6 py-8 text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-[#173c36]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-[#63736c] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#9ac80f]/10 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2d6f68]/10 rounded-2xl" />
              
              <div className="relative rounded-2xl sm:rounded-[2rem] border-2 border-[#9ac80f] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <img
                  src={aboutImg}
                  alt="KAPS Manufacturing Facility"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173c36] mb-4">
                Our Story
              </h2>
              <div className="mb-6 h-1 w-20 sm:w-24 rounded-full bg-[#9ac80f]" />

              <p className="text-[#5f6f68] mb-4 leading-relaxed text-justify">
                Kongunadu Agro Products (KAPS) is driven by innovation under the 
                vision of <strong className="text-[#173c36]">"Irrigation Made Easy."</strong> Our journey 
                began in 1984 as SN Engineering Works, where we established a 
                Gobar Gas plant and served the Erode district with dedication.
              </p>

              <p className="text-[#5f6f68] mb-4 leading-relaxed text-justify">
                In 1992, we expanded into the plastics industry, manufacturing 
                water pots and becoming one of the largest suppliers in the Kongu 
                region. With continuous growth and market understanding, we entered 
                the drip irrigation sector in 2011.
              </p>

              <p className="text-[#5f6f68] leading-relaxed text-justify">
                By 2013, we established our own manufacturing unit producing inline 
                and flat drip irrigation systems. Today, KAPS is a trusted supplier 
                across Tamil Nadu and Karnataka, recognized under the Tamil Nadu 
                Government subsidy scheme with our brand{" "}
                <strong className="text-[#2f7d4b]">VISDHA</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fcf8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173c36]"
            >
              Our Journey
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="mt-2 sm:mt-3 h-1 w-20 sm:w-24 rounded-full bg-[#9ac80f] mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#5f6f68] max-w-2xl mx-auto"
            >
              A legacy of growth, innovation, and trust spanning four decades
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#9ac80f]/20 hidden lg:block" />

            <div className="space-y-6 lg:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="rounded-2xl sm:rounded-[2rem] bg-white border border-[#dce7c4] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] flex items-center justify-center text-[#2f7d4b]">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#9ac80f]">
                            {item.year}
                          </h3>
                          <p className="text-sm text-[#63736c] font-medium">
                            {item.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#5f6f68] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#9ac80f] rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173c36]"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="mt-2 sm:mt-3 h-1 w-20 sm:w-24 rounded-full bg-[#9ac80f] mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#5f6f68] max-w-2xl mx-auto"
            >
              Principles that guide every product we manufacture and every decision we make
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group rounded-2xl sm:rounded-[2rem] bg-white border border-[#dce7c4] p-6 sm:p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e8f5e9] flex items-center justify-center text-[#2f7d4b] group-hover:bg-[#9ac80f] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#173c36]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#9ac80f] font-semibold uppercase tracking-wide">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-[#5f6f68] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-gradient-to-r from-[#173c36] via-[#1d4b42] to-[#2d6f68] px-8 sm:px-12 py-12 text-center shadow-[0_20px_50px_rgba(23,60,54,0.25)]"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
              <FaUsers className="text-4xl text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Join Our Growing Network
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Partner with us to bring efficient irrigation solutions to farmers. 
              Whether you're a dealer, distributor, or farmer, we have the right 
              products and support for your needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-7 py-3 rounded-xl bg-[#2f7d4b] hover:bg-[#25663c] text-white font-semibold shadow-lg transition">
                Become a Dealer
              </button>
              <button className="px-7 py-3 rounded-xl border border-white/25 text-white hover:bg-white/10 font-semibold transition">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;