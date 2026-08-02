import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSeedling,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

const SITE_URL = "https://kongunaduagroproduct.com";
const PAGE_URL = `${SITE_URL}/request-quote`;

const Field = ({ label, icon, children, required }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#173c36] mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
};

const RequestQuote = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    farmType: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const quoteSchema = {
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
        telephone: "+91-9962699988",
        email: "kongunaduagroproduct@gmail.com",
        description:
          "KonguNadu Agro Products manufactures and supplies VISDHA drip irrigation products and provides irrigation product guidance for farms across the Kongu region of Tamil Nadu.",
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
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Request a Quote",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: "Request a Drip Irrigation Quote | KonguNadu Agro Products",
        description:
          "Request a custom VISDHA drip irrigation quotation from KonguNadu Agro Products in Gobichettipalayam.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}/#breadcrumb`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/home2.png`,
        },
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Quote Request from ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Location: ${form.location}
Farm / Crop Type: ${form.farmType}

Additional Notes:
${form.notes}`;

    const whatsappWindow = window.open(
      `https://wa.me/919962699988?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      farmType: "",
      notes: "",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f3fbf5] via-white to-[#eef7f1] flex items-center justify-center px-4">
        <Helmet>
          <title>Quote Request Sent | KonguNadu Agro Products</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        <div className="max-w-xl w-full bg-white rounded-[2rem] border border-[#e7efe9] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-10 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl mb-6">
            🌿
          </div>
          <h2 className="text-3xl font-bold text-[#173c36]">
            Request Sent to KonguNadu Agro
          </h2>
          <p className="mt-4 text-[#5f6f68] leading-relaxed">
            WhatsApp should have opened with your details pre-filled. Our
            Gobichettipalayam team will review your requirements and reply
            shortly.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Start New Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3fbf5] via-white to-[#eef7f1]">
      <Helmet>
        <title>Request Drip Irrigation Quote | KonguNadu Agro Products</title>

        <meta
          name="description"
          content="Request a VISDHA drip irrigation quote from KonguNadu Agro Products in Gobichettipalayam. Get product guidance and PMKSY subsidy assistance."
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <link rel="canonical" href={PAGE_URL} />

        <meta
          property="og:title"
          content="Request Drip Irrigation Quote | KonguNadu Agro Products"
        />
        <meta
          property="og:description"
          content="Share your farm requirements and request a custom VISDHA drip irrigation quotation from our Gobichettipalayam team."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KonguNadu Agro Products" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={`${SITE_URL}/home2.png`} />
        <meta
          property="og:image:alt"
          content="VISDHA drip irrigation products by KonguNadu Agro Products"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Request Drip Irrigation Quote | KonguNadu Agro Products"
        />
        <meta
          name="twitter:description"
          content="Request a custom VISDHA drip irrigation quotation for your farm in Tamil Nadu."
        />
        <meta name="twitter:image" content={`${SITE_URL}/home2.png`} />

        <script type="application/ld+json">
          {JSON.stringify(quoteSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100">
            <FaClipboardList className="text-xs" />
            Irrigation Quote Request
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#112214]">
            Request a <span className="text-green-700">Custom Quote</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[#5f6f68] text-base sm:text-lg leading-relaxed">
            Share your farm&apos;s details and project requirements. Our
            Gobichettipalayam-based team will prepare a tailored{" "}
            <strong>VISDHA drip irrigation</strong> quotation for your farm in{" "}
            <strong>
              Erode, Coimbatore, Salem, Karur, Nilgiris or Pollachi
            </strong>
            .
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-[#e7efe9] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b border-[#edf2ee] bg-gradient-to-r from-[#f7fcf8] to-white">
            <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#173c36]">
              Your Contact Details
            </h2>
            <p className="mt-2 text-[#63736c] text-center">
              Fill out the form below and we’ll get back to you with a
              competitive local quote and PMKSY subsidy guidance.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  label="Full Name"
                  icon={<FaUser className="text-sm" />}
                  required
                >
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </Field>

                <Field
                  label="Phone Number"
                  icon={<FaPhoneAlt className="text-sm" />}
                  required
                >
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  label="Email Address"
                  icon={<FaEnvelope className="text-sm" />}
                >
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </Field>

                <Field
                  label="Location"
                  icon={<FaMapMarkerAlt className="text-sm" />}
                >
                  <input
                    type="text"
                    name="location"
                    autoComplete="address-level2"
                    value={form.location}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, location: e.target.value }))
                    }
                    placeholder="e.g. Erode, Coimbatore, or Pollachi"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </Field>
              </div>

              <Field
                label="Farm / Crop Type"
                icon={<FaSeedling className="text-sm" />}
              >
                <input
                  type="text"
                  name="farmType"
                  value={form.farmType}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, farmType: e.target.value }))
                  }
                  placeholder="e.g. Sugarcane farm in Salem, 5 acres"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </Field>

              <div>
                <label className="block text-sm font-semibold text-[#173c36] mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={5}
                  name="notes"
                  value={form.notes}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Any special requirements, PMKSY subsidy queries, pressure specifications, or terrain details..."
                  className="w-full px-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                <FaPaperPlane className="text-sm" />
                Send Request via WhatsApp
              </button>

              <p className="text-center text-xs text-[#88a08f]">
                This opens WhatsApp with your details pre-filled for our
                KonguNadu Agro support team.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;