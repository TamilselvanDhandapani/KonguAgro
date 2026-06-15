import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  FileText, 
  IndianRupee, 
  Truck, 
  RotateCcw, 
  AlertTriangle, 
  Gavel, 
  RefreshCw, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  ArrowUp,
  ExternalLink,
  Download,
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Box,
  Receipt,
  Award
} from "lucide-react";

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastUpdated] = useState("January 15, 2025");

  // SEO Schema for Terms and Conditions Page
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - KonguNadu Agro Products",
    "description": "Terms and conditions of sale, delivery, and warranties for KonguNadu Agro Products' drip irrigation systems.",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "KonguNadu Agro Products",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gobichettipalayam",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    }
  };

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: "By accessing our website, requesting a quote, or purchasing agricultural products from KonguNadu Agro Products, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Products and Services",
      icon: <Box className="w-6 h-6" />,
      content: "We manufacture and supply drip irrigation systems, PVC pipes, filters, and related farming accessories. While we strive to display our products accurately, variations in color, specifications, or packaging may occur. All product applications should be verified with our experts based on your specific crop and soil conditions in regions like Erode, Coimbatore, or Salem.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 3,
      title: "Pricing, Subsidies & Payments",
      icon: <Receipt className="w-6 h-6" />,
      content: "All prices quoted are in Indian Rupees (INR) and may be subject to applicable taxes (GST) and delivery charges. For products eligible under the Tamil Nadu Government subsidy schemes (such as our VISDHA brand), the approval and release of subsidies are strictly subject to government policies and departmental verification. KonguNadu Agro Products is not liable for government delays or rejections in subsidy claims.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      title: "Shipping & Local Delivery",
      icon: <Truck className="w-6 h-6" />,
      content: "We arrange delivery across the Kongu belt, including Gobichettipalayam, Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi. Delivery times are estimates and may vary due to weather, transport availability, or unforeseen circumstances. The buyer is responsible for ensuring adequate access to the farm for unloading heavy irrigation materials.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 5,
      title: "Returns and Warranties",
      icon: <Award className="w-6 h-6" />,
      content: "Our irrigation products come with a standard manufacturer's warranty against physical defects. This warranty does not cover damages caused by improper installation, excessive water pressure, pest damage (e.g., rat bites on pipes), or improper maintenance. Returns are only accepted for defective items reported within 7 days of delivery.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      id: 6,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "KonguNadu Agro Products shall not be held liable for any indirect, incidental, or consequential damages, including but not limited to crop loss, yield reduction, or water wastage resulting from the use or inability to use our products. Proper agronomic advice should be sought prior to installation.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 7,
      title: "Governing Law & Jurisdiction",
      icon: <Gavel className="w-6 h-6" />,
      content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms, product sales, or services shall be subject to the exclusive jurisdiction of the courts located in Gobichettipalayam, Tamil Nadu.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 8,
      title: "Modifications to Terms",
      icon: <RefreshCw className="w-6 h-6" />,
      content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. Continued use of our services constitutes acceptance of the modified terms.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      id: 9,
      title: "Contact Information",
      icon: <Phone className="w-6 h-6" />,
      content: "If you have any questions or require clarification regarding these Terms & Conditions, please reach out to us at our Gobichettipalayam office.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      isContact: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-amber-50/50">
      {/* SEO Helmet */}
      <Helmet>
        <title>Terms & Conditions | KonguNadu Agro Products - Gobichettipalayam</title>
        <meta name="description" content="Review the Terms and Conditions for KonguNadu Agro Products. Learn about our sales, delivery, and warranty policies for drip irrigation systems in the Kongu region." />
        <script type="application/ld+json">
          {JSON.stringify(termsSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8">
              <Scale className="w-10 h-10 text-amber-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Terms &{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg md:text-xl leading-8 text-gray-300 font-serif">
              Please read these terms carefully before using our services or purchasing 
              our drip irrigation products across the Kongu region.
            </p>

           
            
          </motion.div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Quick Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <BookOpen className="w-7 h-7 text-amber-600" />
                <span>Quick Navigation</span>
              </h3>
              <p className="text-gray-500 mt-2">Jump to any section to learn more</p>
            </div>
            <Sparkles className="w-8 h-8 text-yellow-400 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  document.getElementById(`section-${section.id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-white">{section.icon}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-400 mb-1">SEC {String(section.id).padStart(2, '0')}</div>
                    <div className="text-xs font-semibold text-gray-700 group-hover:text-amber-700 transition-colors line-clamp-2">
                      {section.title}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={`section-${section.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                section.isContact ? 'md:col-span-2' : ''
              }`}
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl" />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <span className="text-white">{section.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-bold text-gray-400">0{section.id}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-xs text-gray-400">Terms Section</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-amber-500 text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-400 hover:bg-amber-50 hover:text-amber-600'
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
                
                {/* Content Preview */}
                <div className={`${activeSection === section.id ? 'hidden' : 'block'}`}>
                  <p className="text-gray-600 line-clamp-2 leading-relaxed">
                    {section.content}
                  </p>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className="mt-4 flex items-center space-x-2 text-sm font-medium text-amber-600 hover:text-amber-700 group"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Expanded Content */}
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {section.content}
                          </p>
                          
                          {/* Contact Info for Section 9 */}
                          {section.isContact && (
                            <div className="mt-6 bg-amber-50 rounded-xl p-6 border border-amber-200">
                              <div className="grid md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-amber-600" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Address</p>
                                    <p className="text-sm font-medium text-gray-900">No. 123, Irrigation Complex<br />Bhavani Main Road, Gobichettipalayam<br />Tamil Nadu 638452</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-amber-600" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <a href="mailto:kongunaduagroproduct@gmail.com" className="text-sm font-medium text-amber-700 hover:underline">
                                      kongunaduagroproduct@gmail.com
                                    </a>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-amber-600" />
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Phone</p>
                                    <a href="tel:+919962699988" className="text-sm font-medium text-amber-700 hover:underline">
                                      +91 93617 84871
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Badges */}
                          {!section.isContact && (
                            <div className="mt-6 flex flex-wrap gap-3">
                              <div className="flex items-center space-x-2 text-xs text-gray-500 bg-white px-3 py-2 rounded-full border border-gray-200">
                                <CheckCircle2 className="w-3 h-3 text-amber-500" />
                                <span>Legal Clause</span>
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-gray-500 bg-white px-3 py-2 rounded-full border border-gray-200">
                                <Shield className="w-3 h-3 text-blue-500" />
                                <span>Binding Agreement</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 border border-amber-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Commitment to You</h3>
            <p className="text-gray-600">Transparent terms for a trustworthy partnership</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Star className="w-6 h-6" />, title: "Fair Practices", desc: "Clear and equitable terms for all" },
              { icon: <Shield className="w-6 h-6" />, title: "Legal Compliance", desc: "Adhering to Indian commercial laws" },
              { icon: <Award className="w-6 h-6" />, title: "Quality Assurance", desc: "Committed to product excellence" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-600 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

     
      
    </div>
  );
};

export default TermsConditions;