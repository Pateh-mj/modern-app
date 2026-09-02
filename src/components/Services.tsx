"use client";

import { motion } from "framer-motion";
import {
  FiLayout,
  FiServer,
  FiCpu,
  FiShield,
  FiTrendingUp,
  FiSmartphone,
} from "react-icons/fi";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: FiLayout,
      badge: "Frontend & Web",
      title: "Next-Gen Web Platforms",
      desc: "Blazing-fast, SEO-optimized web applications built with Next.js, React, and Tailwind CSS engineered for high conversion rates.",
    },
    {
      id: 2,
      icon: FiServer,
      badge: "Cloud & Systems",
      title: "Cloud & Backend Architecture",
      desc: "Resilient serverless microservices, GraphQL/REST APIs, and database engineering designed for 99.99% uptime and zero-latency.",
    },
    {
      id: 3,
      icon: FiCpu,
      badge: "Automation",
      title: "AI & Workflow Automation",
      desc: "Integrate LLMs, predictive intelligence, and automated data pipelines to streamline operations and unlock new customer value.",
    },
    {
      id: 4,
      icon: FiSmartphone,
      badge: "Mobile Apps",
      title: "Cross-Platform Mobile Apps",
      desc: "Native-quality iOS and Android applications utilizing React Native with smooth 60fps animations and offline-first data sync.",
    },
    {
      id: 5,
      icon: FiShield,
      badge: "Security",
      title: "Cybersecurity & Compliance",
      desc: "Enterprise-grade SOC-2 readiness, automated penetration testing, vulnerability scanning, and robust cryptographic data protection.",
    },
    {
      id: 6,
      icon: FiTrendingUp,
      badge: "Growth",
      title: "Conversion & Data Analytics",
      desc: "Data-driven UI/UX optimization, A/B testing frameworks, and custom telemetry dashboards that turn visitors into paying customers.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Our Capabilities</h2>
          <p className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">
            End-to-End Digital Engineering for Modern Scale
          </p>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            From initial prototype to enterprise deployment, we provide the full-stack engineering horsepower your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white border border-gray-200/80 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3.5 bg-primary/10 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                    <service.icon className="text-2xl text-gray-900" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-yellow-700 transition-colors">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 font-raleway text-gray-900 group-hover:text-yellow-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="#contact"
                  className="text-xs font-bold text-gray-900 group-hover:text-yellow-700 transition-colors flex items-center space-x-1"
                >
                  <span>Request solution details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
