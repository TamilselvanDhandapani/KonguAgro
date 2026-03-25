import React, { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSeedling,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

const Field = ({ label, icon, children, required }) => (
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Quote Request from ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Location: ${form.location}
Farm / Crop Type: ${form.farmType}

Additional Notes:
${form.notes}`;

    window.open(
      `https://wa.me/919361784871?text=${encodeURIComponent(message)}`,
      "_blank"
    );

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
        <div className="max-w-xl w-full bg-white rounded-[2rem] border border-[#e7efe9] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-10 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl mb-6">
            🌿
          </div>
          <h2 className="text-3xl font-bold text-[#173c36]">
            Quote Request Sent
          </h2>
          <p className="mt-4 text-[#5f6f68] leading-relaxed">
            WhatsApp should have opened with your details pre-filled.
          </p>
          <button
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
            Share your contact details and project requirements. We’ll prepare a
            tailored quotation for your irrigation needs.
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
              Fill out the form below and we’ll get back to you with a custom
              quote.
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
                    value={form.location}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, location: e.target.value }))
                    }
                    placeholder="e.g. Coimbatore, Tamil Nadu"
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
                  value={form.farmType}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, farmType: e.target.value }))
                  }
                  placeholder="e.g. Drip irrigated sugarcane, 5 acres"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </Field>

              <div>
                <label className="block text-sm font-semibold text-[#173c36] mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={5}
                  value={form.notes}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Any special requirements, pipe lengths, pressure specs..."
                  className="w-full px-4 py-3.5 rounded-xl border border-[#dce8de] bg-[#fcfffc] focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                <FaPaperPlane className="text-sm" />
                Send via WhatsApp
              </button>

              <p className="text-center text-xs text-[#88a08f]">
                This opens WhatsApp with all details pre-filled.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;