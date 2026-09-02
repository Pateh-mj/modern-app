"use client";

import { motion } from "framer-motion";
import { FiAward, FiShield, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

const clients = [
  { name: "Apex Global", logo: "APEX" },
  { name: "ScalePulse", logo: "ScalePulse" },
  { name: "FinMatrix", logo: "FinMatrix" },
  { name: "CloudNova", logo: "CloudNova" },
  { name: "VentureOne", logo: "VentureOne" },
  { name: "Lumina Labs", logo: "Lumina" },
];

const trustBadges = [
  { icon: FiAward, label: "Top Rated B2B Tech Partner" },
  { icon: FiShield, label: "Enterprise Grade & SOC-2 Ready" },
  { icon: FiTrendingUp, label: "99.8% Client ROI Rate" },
  { icon: FiCheckCircle, label: "100% On-Time Delivery" },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-950 py-12 border-b border-gray-800 text-white relative z-20">
      <div className="container mx-auto px-4">
        {/* Trust pill title */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">
            Trusted by 250+ Ambitious Startups & Growing Enterprises
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center mb-10 opacity-75">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="text-xl md:text-2xl font-black font-raleway tracking-wider text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
              {client.logo}
            </motion.div>
          ))}
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-800/60">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-2 text-gray-300 text-xs md:text-sm">
              <badge.icon className="text-primary text-base flex-shrink-0" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
