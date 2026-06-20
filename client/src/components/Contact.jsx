import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock3,
  MapPin,
  ArrowUpRight,
  Send,
  MessageSquare,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "kongunaduagroproduct@gmail.com",
    href: "mailto:kongunaduagroproduct@gmail.com",
    description: "Send us your product, pricing, or support queries anytime.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99626 99988",
    href: "tel:+919962699988",
    description: "Talk directly with us for faster help and recommendations.",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Monday - Saturday · 9:00 AM - 6:00 PM",
    href: "#",
    description: "We’re available during business hours for calls and visits.",
  },
];

export default function ContactPage() {
  // SEO UPGRADE: Enriched LocalBusiness Schema with Brand, Subsidy, and Alternate Name data
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "KonguNadu Agro Products",
      "alternateName": "KAPS",
      "description": "Get in touch with KonguNadu Agro Products (KAPS) for premium VISDHA drip irrigation systems, agriculture pipes, and PMKSY subsidy guidance.",
      "telephone": "+91-9962699988",
      "email": "kongunaduagroproduct@gmail.com",
      "brand": {
        "@type": "Brand",
        "name": "VISDHA"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 123, Irrigation Complex, Bhavani Main Road",
        "addressLocality": "Gobichettipalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638452",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Gobichettipalayam",
        "Erode",
        "Coimbatore",
        "Salem",
        "Karur",
        "Nilgiris",
        "Pollachi"
      ],
      "url": "https://www.kongunaduagroproduct.com/contact"
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900 overflow-hidden">
      {/* SEO UPGRADE: Sharpened Meta Tags and Canonical URL Integration */}
      <Helmet>
        <title>Contact KonguNadu Agro | Drip Irrigation Dealers in Gobichettipalayam</title>
        <meta name="description" content="Contact KonguNadu Agro Products (KAPS) in Gobichettipalayam for VISDHA drip irrigation systems and PMKSY subsidy support. Serving Erode, Salem & Coimbatore." />
        <meta name="keywords" content="Contact KonguNadu Agro, Drip irrigation Gobichettipalayam contact, VISDHA drip dealers Erode, Irrigation dealers Coimbatore, Salem farm supplies, Karur micro irrigation, Pollachi drip tape" />
        <link rel="canonical" href="https://www.kongunaduagroproduct.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-8rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-lime-100/40 blur-3xl" />
      </div>

      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_26%)]" />

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <motion.div variants={fadeUp} className="max-w-2xl">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    <MessageSquare className="h-4 w-4" />
                    Contact KonguNadu Agro
                  </div>
                </div>

                {/* SEO Optimized H1 */}
                <h1 className="mt-4 text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
                  Build the right
                  <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500 bg-clip-text text-transparent">
                    irrigation solution
                  </span>
                  for the Kongu region.
                </h1>

                {/* SEO UPGRADE: Localized Body Copy with Subsidy Injection */}
                <p className="mt-5 max-w-xl text-base sm:text-lg text-center sm:text-left leading-6 text-slate-600">
                  Based in <strong>Gobichettipalayam</strong>, we provide expert product guidance, <strong>PMKSY subsidy</strong> assistance, and installation support for farms across <strong>Erode, Coimbatore, Salem, Karur, Nilgiris, and Pollachi</strong>. Reach out to choose a solution that fits your land and water needs.
                </p>

                <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
                  <a
                    href="mailto:kongunaduagroproduct@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5"
                  >
                    Email Us
                    <Send className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+919962699988"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Call Now
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                  <div className="mb-5">
                    <h2 className="text-2xl font-bold text-slate-900">
                      Send a Message
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Fill in your details and our Gobichettipalayam team will get back to you promptly.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
                        <input
                          type="text"
                          placeholder="Enter first name"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter last name"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Subject / Location</label>
                      <input
                        type="text"
                        placeholder="E.g., Drip Irrigation inquiry in Pollachi"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your farm's requirement..."
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5"
                    >
                      Send Enquiry
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-green-50 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {item.href && item.href !== "#" ? (
                    <a
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:gap-3"
                    >
                      {item.value}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-5 text-sm font-semibold text-slate-700">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b lg:border-b-0 lg:border-r border-slate-200/70 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <MapPin className="h-5 w-5" />
                </div>

                {/* SEO Optimized H2 */}
                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                  Visit Our Gobichettipalayam Office
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Meet us at our headquarters for product discussions, bulk orders, and direct consultation before we deploy to your farm.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Address
                  </p>
                  <address className="mt-3 not-italic text-slate-700 leading-7">
                    <strong>KonguNadu Agro Products</strong>
                    <br />
                    No. 123, Irrigation Complex,
                    <br />
                    Bhavani Main Road,
                    <br />
                    Gobichettipalayam,
                    <br />
                    Tamil Nadu 638452, India
                  </address>

                  <a
                    href="https://maps.google.com/?q=Gobichettipalayam,+Tamil+Nadu+638452,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    Get Directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <iframe
                  title="KonguNadu Agro Products Location in Gobichettipalayam"
                  src="https://maps.google.com/maps?q=Gobichettipalayam%2C%20Tamil%20Nadu%20638452%2C%20India&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[320px] sm:min-h-[400px] w-full rounded-[1.5rem]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}