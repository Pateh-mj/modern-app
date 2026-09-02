"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiLayers, FiShield } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    icon: FiZap,
    title: "Rapid Execution & Sprint Velocity",
    desc: "We transform product requirements into production-ready platforms in weeks, not quarters, using battle-tested modern architectures.",
  },
  {
    icon: FiLayers,
    title: "Scalable Cloud-Native Foundations",
    desc: "Built from day one to handle exponential traffic surges, global CDN distribution, and resilient multi-tenant databases.",
  },
  {
    icon: FiShield,
    title: "Enterprise Security & Full Compliance",
    desc: "Every line of code adheres to rigorous OWASP standards, role-based access control (RBAC), and automated vulnerability testing.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">About Our Approach</h2>
          <p className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">
            We Bridge the Gap Between Ambitious Vision and Flawless Digital Execution
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
              <Image
                src="/test.png"
                alt="Engineering Team Collaboration"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent" />

              {/* Floating highlight card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-xl shadow-lg border border-white/50 text-gray-900">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Active Production Support
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug sm:leading-normal">
                  Accelerating roadmaps for over 250+ venture-backed scaleups and mid-market enterprises worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Copy and Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Growing companies cannot afford delayed roadmaps, bloated legacy code, or fragile prototypes. We deliver
              cross-functional senior engineering and product design squads that plug directly into your business to ship resilient, revenue-generating software.
            </p>

            <div className="space-y-6 mb-10">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-yellow-700 flex-shrink-0 mt-1">
                    <pillar.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{pillar.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white hover:bg-primary hover:text-gray-950 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <span>Learn How We Work</span>
                <FiCheckCircle className="text-base" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
