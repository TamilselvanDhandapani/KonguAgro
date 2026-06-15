import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Cookie, 
  Eye, 
  Share2, 
  Users, 
  FileText, 
  Bell, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  ArrowUp,
  Menu,
  X,
  ExternalLink,
  Download,
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastUpdated] = useState("January 15, 2025");

  // SEO Schema for Legal Page
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - KonguNadu Agro Products",
    "description": "Privacy Policy for KonguNadu Agro Products. Learn how we protect customer information across the Kongu region.",
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
      title: "Information We Collect",
      icon: <Eye className="w-6 h-6" />,
      content: "We may collect personal information such as your name, phone number, email address, farm/company details, and any information you voluntarily provide through contact forms, quotation requests, or service inquiries.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <FileText className="w-6 h-6" />,
      content: "The information we collect is used to respond to inquiries, provide customized drip irrigation quotes, offer local customer support across districts like Erode, Coimbatore, and Salem, improve our products, and communicate important updates related to our business operations.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 3,
      title: "Information Sharing",
      icon: <Share2 className="w-6 h-6" />,
      content: "We do not sell, trade, or rent your personal information to third parties. Information may only be shared when required by law or when strictly necessary to fulfill agricultural product deliveries and services requested by you.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content: "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission method can be guaranteed to be completely secure.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 5,
      title: "Cookies & Analytics",
      icon: <Cookie className="w-6 h-6" />,
      content: "Our website may use cookies and analytics tools to improve user experience, understand local website traffic, and enhance functionality. You may choose to disable cookies through your browser settings.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      id: 6,
      title: "Third-Party Links",
      icon: <ExternalLink className="w-6 h-6" />,
      content: "Our website may contain links to external websites or government subsidy portals. We are not responsible for the privacy practices or content of those third-party sites.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 7,
      title: "Your Rights",
      icon: <Users className="w-6 h-6" />,
      content: "You may request access, correction, or deletion of your personal information by contacting our Gobichettipalayam office. We will make reasonable efforts to comply with applicable legal requirements.",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      id: 8,
      title: "Changes to This Policy",
      icon: <Bell className="w-6 h-6" />,
      content: "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-green-50/50">
      {/* SEO Helmet */}
      <Helmet>
        <title>Privacy Policy | KonguNadu Agro Products - Gobichettipalayam</title>
        <meta name="description" content="Privacy Policy for KonguNadu Agro Products. Learn how we protect the data of our customers across Gobichettipalayam, Erode, Coimbatore, and the Kongu region." />
        <script type="application/ld+json">
          {JSON.stringify(privacySchema)}
        </script>
      </Helmet>

      

      {/* Hero Section - KEPT EXACTLY AS ORIGINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
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
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
           <p className="mx-auto max-w-3xl text-lg md:text-xl leading-8 text-gray-300 font-serif">
  Your privacy is important to us. This policy explains how KonguNadu Agro
  Products collects, uses, and protects your information when you use our
  website and services across the Kongu region.
</p>

            
          </motion.div>
        </div>

        
      </section>

      {/* MODERN REDESIGNED QUICK NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <BookOpen className="w-7 h-7 text-green-600" />
                <span>Quick Navigation</span>
              </h3>
              <p className="text-gray-500 mt-2">Jump to any section to learn more</p>
            </div>
            <Sparkles className="w-8 h-8 text-yellow-400 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  document.getElementById(`section-${section.id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-start space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-white">{section.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-400 mb-1">SECTION {String(section.id).padStart(2, '0')}</div>
                    <div className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition-colors">
                      {section.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN REDESIGNED MAIN CONTENT */}
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
                index === sections.length - 1 && sections.length % 2 !== 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl" />
              
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
                        <span className="text-xs text-gray-400">Policy Section</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
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
                        ? 'bg-green-500 text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-400 hover:bg-green-50 hover:text-green-600'
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
                    className="mt-4 flex items-center space-x-2 text-sm font-medium text-green-600 hover:text-green-700 group"
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
                          
                          {/* Additional Info */}
                          <div className="mt-6 flex flex-wrap gap-3">
                            <div className="flex items-center space-x-2 text-xs text-gray-500 bg-white px-3 py-2 rounded-full border border-gray-200">
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              <span>Verified Policy</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 bg-white px-3 py-2 rounded-full border border-gray-200">
                              <Shield className="w-3 h-3 text-blue-500" />
                              <span>GDPR Compliant</span>
                            </div>
                          </div>
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
          className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Trust Matters</h3>
            <p className="text-gray-600">We're committed to protecting your privacy and data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Star className="w-6 h-6" />, title: "Transparency", desc: "Clear and open about our practices" },
              { icon: <Shield className="w-6 h-6" />, title: "Security", desc: "Industry-standard protection measures" },
              { icon: <Users className="w-6 h-6" />, title: "Control", desc: "You own and control your data" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    

      
    </div>
  );
};

export default PrivacyPolicy;