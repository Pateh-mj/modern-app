"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FiExternalLink, FiTrendingUp } from "react-icons/fi";

const portfolioItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    title: "Apex FinTech Banking Platform",
    category: "FinTech",
    impact: "+320% Checkout Volume",
    desc: "Engineered a low-latency digital banking & transaction engine with real-time multi-currency settlement.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    title: "CloudPulse Enterprise Analytics",
    category: "SaaS",
    impact: "10M+ Daily API Events",
    desc: "Real-time telemetry and infrastructure monitoring dashboard with predictive anomaly detection.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    title: "HealthSync Pro Telehealth Portal",
    category: "HealthTech",
    impact: "HIPAA Certified & 99.9% Uptime",
    desc: "Secure end-to-end encrypted telehealth suite connecting 50k+ patients with specialized practitioners.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556742049-0a67e55722c0?auto=format&fit=crop&q=80",
    title: "RetailScale AI Commerce Suite",
    category: "E-Commerce",
    impact: "4.2x Conversion Lift",
    desc: "Headless Next.js e-commerce storefront with personalized AI recommendation algorithms.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    title: "Nexus CyberSec Threat Matrix",
    category: "Security",
    impact: "Zero Data Breaches",
    desc: "Automated vulnerability scanner and RBAC permission manager for mid-market financial institutions.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    title: "OmniLogistics Fleet Tracker",
    category: "Mobile & IoT",
    impact: "40% Fuel Cost Reduction",
    desc: "Real-time mobile fleet dispatch and route optimization app with offline map caching.",
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "FinTech", "SaaS", "HealthTech", "E-Commerce", "Security"];
  const filteredItems =
    filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  const slides = portfolioItems.map((item) => ({ src: item.src }));

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Selected Case Studies</h2>
          <p className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">
            Proven Products Delivering Real Business Outcomes
          </p>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Explore a curated selection of production applications and enterprise platforms we've built for market leaders.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === cat
                ? "bg-gray-950 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-gray-100"
                  onClick={() => setIndex(portfolioItems.findIndex((p) => p.id === item.id))}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center space-x-1">
                      <span>View Gallery</span>
                      <FiExternalLink className="text-xs" />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md w-fit mb-3">
                      <FiTrendingUp className="text-primary" />
                      <span>{item.impact}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 font-raleway mb-2 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </section>
  );
}
