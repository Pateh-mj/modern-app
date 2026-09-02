"use client";

import { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiSend, FiCheckCircle, FiShield } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serviceNeeded, setServiceNeeded] = useState("Web Platform / App");
  const [budget, setBudget] = useState("$5k - $15k");

  const services = ["Web Platform / App", "Cloud & Backend", "AI & Automation", "UI/UX Redesign", "Dedicated Squad"];
  const budgets = ["<$5k", "$5k - $15k", "$15k - $50k", "$50k+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Let's Connect</h2>
          <p className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">
            Start Your Next Digital Initiative
          </p>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Tell us about your goals, timelines, and requirements. We'll reply within 24 hours with an actionable roadmap.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-bold font-raleway mb-6 text-primary">Direct Communication</h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg text-primary flex-shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                    <p className="text-gray-300">partnerships@modernapp.io</p>
                    <p className="text-gray-400 text-xs mt-0.5">Response time: &lt; 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg text-primary flex-shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Direct Line</h4>
                    <p className="text-gray-300">+1 (800) 555-0199</p>
                    <p className="text-gray-400 text-xs mt-0.5">Mon–Fri: 9AM – 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg text-primary flex-shrink-0">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">HQ & Offices</h4>
                    <p className="text-gray-300">500 Howard St, San Francisco, CA</p>
                    <p className="text-gray-300">100 Bishopsgate, London, UK</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800 flex items-center space-x-3 text-xs text-gray-300">
                <FiCalendar className="text-primary text-base flex-shrink-0" />
                <span>Prefer a quick live demo? Book directly via Google Meet or Zoom.</span>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:w-2/3"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold font-raleway text-gray-900 mb-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto text-sm mb-6">
                    Thank you for reaching out. One of our Senior Technical Leads will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline text-sm"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Service Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      1. What service do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setServiceNeeded(srv)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${serviceNeeded === srv
                            ? "bg-gray-900 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      2. Estimated Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${budget === b
                            ? "bg-primary text-gray-950 font-bold shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Work Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-sm"
                      />
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Project Goals & Overview *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objectives, key deadlines, or existing tech stack..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-sm"
                    />
                  </div>

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-primary text-gray-950 px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors shadow-md flex items-center justify-center space-x-2"
                    >
                      <span>Request Discovery Roadmap</span>
                      <FiSend className="text-base" />
                    </button>
                    <p className="text-xs text-gray-500 mt-4 flex items-center justify-center sm:justify-start space-x-1.5">
                      <FiShield className="text-amber-600 text-xl font-bold flex-shrink-0" />
                      <span>Strictly confidential. We respect non-disclosure agreements (NDAs).</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
