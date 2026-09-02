"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiPlayCircle, FiStar, FiCheckCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image / Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}
      />

      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none z-10" />

      <div className="container mx-auto px-4 z-20 text-center text-white relative">
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg py-1.5 px-4 mb-8 text-xs sm:text-sm text-gray-200"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-semibold">Next-Gen Digital Solutions & Cloud Architecture</span>
          <span className="text-primary font-bold">→</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-raleway tracking-tight mb-6 max-w-5xl mx-auto leading-tight"
        >
          Scale Your Business With <span className="text-primary">Enterprise-Grade</span> Digital Products
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light"
        >
          We build high-performance web platforms, intelligent automation workflows, and cloud systems engineered to accelerate your revenue and drive market leadership.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-primary text-gray-950 px-8 py-4 rounded-lg font-bold text-base hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-500/20 flex items-center justify-center space-x-2 group"
          >
            <span>Book a Discovery Call</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FiPlayCircle className="text-xl text-primary" />
            <span>Explore Solutions</span>
          </Link>
        </motion.div>

        {/* Social Proof Snippets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300 pt-4"
        >
          <div className="flex items-center space-x-2">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-current text-primary" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9/5 Rating</span>
            <span className="text-gray-400">(150+ Reviews)</span>
          </div>

          <div className="flex items-center space-x-1.5 text-gray-300">
            <FiCheckCircle className="text-primary text-base" />
            <span>99.9% Uptime SLA Guaranteed</span>
          </div>

          <div className="flex items-center space-x-1.5 text-gray-300">
            <FiCheckCircle className="text-primary text-base" />
            <span>Full IP & Source Code Ownership</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
