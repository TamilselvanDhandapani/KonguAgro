import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCogs } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";

// --- Original image imports ---
import onlinePipeImg from "../assets/OnlinePipe.png";
import inlinePipeImg from "../assets/InlinePipe.png";
import pvcPipeImg from "../assets/PVCpipe.png";
import ballValveImg from "../assets/Ballvalve.png";
import airReleaseValveImg from "../assets/AirValve.png";
import dripAccessoriesImg from "../assets/Accessories.png";
import onlineDripperImg from "../assets/Onlinedrip.png";
import semiAutoScreenFilterImg from "../assets/SASfilter.png";
import discFilterImg from "../assets/DISCfilter.png";
import hydroCycloneFilterImg from "../assets/HCfilter.png";
import screenFilterImg from "../assets/Screenfilter.png";

// --- Product data ---
const productSections = [
  {
    sectionTitle: "Agriculture Pipes",
    products: [
      {
        title: "INLINE PIPES",
        subtitle: "IS 2345 : 1000",
        image: inlinePipeImg,
        rows: [
          { productName: "12mm Inline Lateral", nominalId: "12 mm", wallThickness: "0.9 - 1.1 mm", type: "Class II", pressureRating: "2.5 Kg/cm²" },
          { productName: "16mm Inline Lateral", nominalId: "16 mm", wallThickness: "1.1 - 1.3 mm", type: "Class II", pressureRating: "2.5 Kg/cm²" },
        ],
      },
      {
        title: "ONLINE PIPES",
        subtitle: "IS 2345 : 1000",
        image: onlinePipeImg,
        rows: [
          { productName: "12mm Plain Lateral", nominalId: "12 mm", wallThickness: "0.9 - 1.1 mm", type: "Class II", pressureRating: "2.5 Kg/cm²" },
          { productName: "16mm Plain Lateral", nominalId: "16 mm", wallThickness: "1.1 - 1.3 mm", type: "Class II", pressureRating: "2.5 Kg/cm²" },
        ],
      },
      {
        title: "PVC PIPES",
        subtitle: "High Strength Irrigation Grade",
        image: pvcPipeImg,
        rows: [
          { productName: "PVC Pipe 50mm", nominalId: "50 mm", wallThickness: "Standard", type: "Rigid", pressureRating: "6 Kg/cm²" },
          { productName: "PVC Pipe 75mm", nominalId: "75 mm", wallThickness: "Standard", type: "Rigid", pressureRating: "6 Kg/cm²" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Drip Accessories & Emitters",
    products: [
      {
        title: "BALL VALVES",
        subtitle: "Reliable Flow Control",
        image: ballValveImg,
        rows: [
          { productName: "Ball Valve 40mm", nominalId: "40 mm", wallThickness: "-", type: "Valve", pressureRating: "Standard" },
          { productName: "Ball Valve 50mm", nominalId: "50 mm", wallThickness: "-", type: "Valve", pressureRating: "Standard" },
        ],
      },
      {
        title: "AIR RELEASE VALVES",
        subtitle: "Pressure Protection Components",
        image: airReleaseValveImg,
        rows: [
          { productName: "Single Air Release Valve", nominalId: "-", wallThickness: "-", type: "Valve", pressureRating: "Standard" },
        ],
      },
      {
        title: "DRIP ACCESSORIES",
        subtitle: "Connectors & Fittings",
        image: dripAccessoriesImg,
        rows: [
          { productName: "Take Off / Grommet", nominalId: "-", wallThickness: "-", type: "Accessory", pressureRating: "-" },
          { productName: "Connector / Tee / Elbow", nominalId: "-", wallThickness: "-", type: "Accessory", pressureRating: "-" },
          { productName: "Ring Start / Ring Connector", nominalId: "-", wallThickness: "-", type: "Accessory", pressureRating: "-" },
          { productName: "Reducing Tee / DB Connector", nominalId: "-", wallThickness: "-", type: "Accessory", pressureRating: "-" },
        ],
      },
      {
        title: "ONLINE DRIPPERS",
        subtitle: "Precision Water Delivery",
        image: onlineDripperImg,
        rows: [
          { productName: "2 LPH Dripper", nominalId: "-", wallThickness: "-", type: "Dripper", pressureRating: "Standard" },
          { productName: "4 LPH Dripper", nominalId: "-", wallThickness: "-", type: "Dripper", pressureRating: "Standard" },
          { productName: "8 LPH Dripper", nominalId: "-", wallThickness: "-", type: "Dripper", pressureRating: "Standard" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Irrigation Filters",
    products: [
      {
        title: "SEMI AUTOMATIC SCREEN FILTER",
        subtitle: "Efficient Primary Filtration",
        image: semiAutoScreenFilterImg,
        rows: [
          { productName: "Semi Automatic Screen Filter", nominalId: "2 inch", wallThickness: "-", type: "Filter", pressureRating: "Standard" },
        ],
      },
      {
        title: "DISC FILTER",
        subtitle: "Fine Particle Filtration",
        image: discFilterImg,
        rows: [
          { productName: "Disc Filter", nominalId: "2 inch", wallThickness: "-", type: "Filter", pressureRating: "Standard" },
        ],
      },
      {
        title: "HYDRO CYCLONE FILTER",
        subtitle: "Sand Separation System",
        image: hydroCycloneFilterImg,
        rows: [
          { productName: "Hydro Cyclone Filter", nominalId: "2 inch", wallThickness: "-", type: "Filter", pressureRating: "Standard" },
        ],
      },
      {
        title: "SCREEN FILTER",
        subtitle: "Clean Flow Protection",
        image: screenFilterImg,
        rows: [
          { productName: "Screen Filter", nominalId: "2 inch", wallThickness: "-", type: "Filter", pressureRating: "Standard" },
        ],
      },
    ],
  },
];

// --- ProductTable component ---
const ProductTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full min-w-[600px] md:min-w-full border border-[#2e2e2e]/20 text-sm md:text-base">
        <thead>
          <tr className="bg-[#9ac80f] text-white">
            <th className="px-3 md:px-5 py-3 md:py-4 text-left text-xs md:text-base font-semibold border border-black/20">Product Name</th>
            <th className="px-3 md:px-5 py-3 md:py-4 text-left text-xs md:text-base font-semibold border border-black/20">Nominal ID</th>
            <th className="px-3 md:px-5 py-3 md:py-4 text-left text-xs md:text-base font-semibold border border-black/20">Wall Thickness</th>
            <th className="px-3 md:px-5 py-3 md:py-4 text-left text-xs md:text-base font-semibold border border-black/20">Type</th>
            <th className="px-3 md:px-5 py-3 md:py-4 text-left text-xs md:text-base font-semibold border border-black/20">Pressure Rating</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="bg-white hover:bg-[#f8fbf1] transition">
              <td className="px-3 md:px-4 py-3 md:py-4 border border-black/20 text-[#111827] text-xs md:text-sm">{row.productName}</td>
              <td className="px-3 md:px-5 py-3 md:py-4 border border-black/20 text-[#111827] text-xs md:text-sm">{row.nominalId}</td>
              <td className="px-3 md:px-5 py-3 md:py-4 border border-black/20 text-[#111827] text-xs md:text-sm">{row.wallThickness}</td>
              <td className="px-3 md:px-5 py-3 md:py-4 border border-black/20 text-[#111827] text-xs md:text-sm">{row.type}</td>
              <td className="px-3 md:px-5 py-3 md:py-4 border border-black/20 text-[#111827] text-xs md:text-sm">{row.pressureRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- ProductShowcaseCard component ---
const ProductShowcaseCard = ({ product }) => {
  return (
    <div className="rounded-2xl sm:rounded-[2rem] bg-[#f6f7f5] border border-[#dce7c4] p-2 sm:p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Image section with SEO-optimized Alt Text */}
        <div className="w-full lg:w-[280px] xl:w-[360px] 2xl:w-[400px] shrink-0 rounded-2xl sm:rounded-[2rem] border-2 border-[#9ac80f] overflow-hidden bg-white">
          <img
            src={product.image}
            alt={`VISDHA ${product.title} - High quality drip irrigation components by KonguNadu Agro Products in Tamil Nadu`}
            className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
          />
        </div>

        {/* Content section */}
        <div className="flex-1 w-full min-w-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-[#9ac80f] break-words">
            <span>{product.title.split(" ")[0]}</span>{" "}
            <span className="text-[#1f2937]">
              {product.title.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <p className="mt-2 text-[#0094ff] text-lg sm:text-xl font-medium">
            {product.subtitle}
          </p>
          <div className="mt-2">
            <ProductTable rows={product.rows} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Combined Products component ---
const Products = () => {
  // SEO UPGRADE: Enhanced ItemList Schema mapping to specific product types and the VISDHA brand
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "VISDHA Agriculture Inline & Online Pipes",
          "brand": { "@type": "Brand", "name": "VISDHA" },
          "description": "High strength irrigation grade PVC, inline, and online lateral pipes."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "VISDHA Drip Irrigation Accessories & Valves",
          "brand": { "@type": "Brand", "name": "VISDHA" },
          "description": "Precision flow control ball valves, air release valves, and online drippers."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "VISDHA Micro Irrigation Filters",
          "brand": { "@type": "Brand", "name": "VISDHA" },
          "description": "Semi-automatic screen filters, disc filters, and hydro cyclone sand separation systems."
        }
      }
    ],
    "mainEntityOfPage": {
      "@type": "LocalBusiness",
      "name": "KonguNadu Agro Products",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gobichettipalayam",
        "addressRegion": "Tamil Nadu"
      },
      "areaServed": ["Gobichettipalayam", "Erode", "Coimbatore", "Salem", "Karur", "Nilgiris", "Pollachi"]
    }
  };

  const stats = [
    { value: "7+", label: "System Sections" },
    { value: "25+", label: "Essential Products" },
    { value: "3", label: "Advanced Specialty Tools" },
    { value: "100%", label: "Kongu Region Focused Solutions" },
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14 } } };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* SEO UPGRADE: Sharpened Meta Tags and Canonical Link */}
      <Helmet>
        <title>VISDHA Drip Irrigation Pipes & Filters | KonguNadu Agro Products</title>
        <meta name="description" content="Explore KAPS's complete VISDHA range of drip irrigation pipes, filters, and accessories in Gobichettipalayam. 100% PMKSY subsidy approved for TN farms." />
        <meta name="keywords" content="VISDHA Agriculture pipes Coimbatore, Drip irrigation filters Erode, Micro irrigation accessories Salem, Farm pipes Karur, Drip tape Nilgiris, PVC pipes Pollachi, KonguNadu Agro Products Gobichettipalayam" />
        <link rel="canonical" href="https://www.kongunaduagroproduct.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

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
            Modern Irrigation Product Range for the Kongu Belt
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-[#173c36]">VISDHA Drip </span>
            <span className="bg-gradient-to-r from-[#2f7d4b] via-[#3f9c68] to-[#2d6f68] bg-clip-text text-transparent">
              Irrigation Products
            </span>
          </motion.h1>

          {/* SEO UPGRADE: Injected Subsidy language naturally into the paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-[#5f6f68] max-w-3xl mx-auto leading-relaxed"
          >
            Explore our complete <strong>VISDHA</strong> drip irrigation product ecosystem — from head units and pipelines to emitters, fittings, and specialty flow control components. Built for efficient agriculture and approved for <strong>PMKSY government subsidies</strong> across <strong>Gobichettipalayam, Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi.</strong>
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#edf2ee] overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#edf2ee]">
              {stats.map((stat, idx) => (
                <div key={idx} className="px-6 py-8 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#173c36]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-[#63736c] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogue Sections */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {productSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173c36]">
                  {section.sectionTitle}
                </h2>
                <div className="mt-2 sm:mt-3 h-1 w-20 sm:w-24 rounded-full bg-[#9ac80f]" />
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-8 sm:space-y-10">
                {section.products.map((product, productIndex) => (
                  <motion.div key={productIndex} variants={fadeInUp}>
                    <ProductShowcaseCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173c36]">
              Get Expert Guidance in Your District
            </h2>
            <div className="mt-2 h-1 w-20 sm:w-24 rounded-full bg-[#9ac80f] mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-gradient-to-r from-[#173c36] via-[#1d4b42] to-[#2d6f68] px-8 sm:px-12 py-12 text-center shadow-[0_20px_50px_rgba(23,60,54,0.25)]"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
              <FaCogs className="text-4xl text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Need Help Choosing the Right Products?
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Based in Gobichettipalayam, our local experts will help you select the exact combination of pipes, emitters, filters, and fittings suited for the specific soil and water conditions of your farm.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-7 py-3 rounded-xl bg-[#2f7d4b] hover:bg-[#25663c] text-white font-semibold shadow-lg transition"
              >
                Request a Quote
              </Link>
              {/* SEO UPGRADE: Replaced <button> with React Router <Link> */}
              <Link 
                to="/contact" 
                className="px-7 py-3 rounded-xl border border-white/25 text-white hover:bg-white/10 font-semibold transition inline-block"
              >
                Contact Our Local Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;