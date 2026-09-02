"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiZap } from "react-icons/fi";
import Link from "next/link";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"sprint" | "retainer">("sprint");

  const plans = [
    {
      name: "Launchpad",
      desc: "Ideal for early-stage companies needing a high-impact MVP or complete brand & web redesign.",
      sprintPrice: "$4,900",
      sprintPeriod: "per project",
      retainerPrice: "$3,800",
      retainerPeriod: "per month",
      popular: false,
      features: [
        "Complete Next.js & Tailwind Web App",
        "Mobile-First Responsive UX/UI",
        "SEO Optimization & Core Web Vitals 95+",
        "CMS Integration (Sanity / Strapi / Notion)",
        "2 Weeks Post-Launch Support & Warranty",
        "Full IP & Code Ownership",
      ],
      ctaText: "Start Launchpad",
    },
    {
      name: "Growth Squad",
      desc: "Dedicated cross-functional team to accelerate product features, scale infrastructure, and boost conversions.",
      sprintPrice: "$9,500",
      sprintPeriod: "per milestone",
      retainerPrice: "$7,800",
      retainerPeriod: "per month",
      popular: true,
      badge: "Most Popular for Scaling",
      features: [
        "Everything in Launchpad",
        "Dedicated Senior Lead Engineer & Designer",
        "Full-Stack APIs & Cloud Serverless Architecture",
        "Conversion Rate & Analytics Instrumentation",
        "Continuous CI/CD Automated Pipelines",
        "Bi-weekly Strategy & Sprint Reviews",
        "Priority 24/7 SLA Support",
      ],
      ctaText: "Accelerate Growth",
    },
    {
      name: "Enterprise Custom",
      desc: "Tailored engineering squads for high-volume platforms, complex security requirements, and custom SLAs.",
      sprintPrice: "Custom",
      sprintPeriod: "tailored scope",
      retainerPrice: "Custom",
      retainerPeriod: "flexible retainer",
      popular: false,
      features: [
        "Full Multi-Tenant & Microservices Architecture",
        "SOC-2, HIPAA & ISO-27001 Compliance",
        "Custom Legacy Data Migration & Integration",
        "Dedicated Solutions Architect & Technical PM",
        "Custom SLAs with 99.99% Uptime Guarantee",
        "Executive Procurement & Vendor Security Support",
      ],
      ctaText: "Contact Solutions Team",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Transparent Pricing</h2>
          <p className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">
            Investment Plans Built to Scale With You
          </p>
          <p className="text-gray-600 mt-4">
            No hidden fees. Transparent milestones and flexible engagement models to match your business roadmap.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <span className={`text-sm font-semibold ${billingCycle === "sprint" ? "text-gray-900 font-bold" : "text-gray-500"}`}>
            Project-Based Sprints
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "sprint" ? "retainer" : "sprint")}
            className="w-14 h-8 bg-gray-900 rounded-full p-1 relative transition-colors focus:outline-none"
            aria-label="Toggle billing cycle"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-primary rounded-full"
              style={{
                marginLeft: billingCycle === "retainer" ? "auto" : "0",
              }}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center space-x-1.5 ${billingCycle === "retainer" ? "text-gray-900 font-bold" : "text-gray-500"}`}>
            <span>Dedicated Retainer</span>
            <span className="bg-primary/20 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-bold">Save 15%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${plan.popular
                ? "bg-gray-900 text-white shadow-2xl scale-105 border-2 border-primary"
                : "bg-white text-gray-900 shadow-md border border-gray-200 hover:shadow-xl"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-gray-950 text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full flex items-center shadow-md">
                  <FiZap className="mr-1 text-sm" />
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className={`text-2xl font-bold font-raleway mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-6 leading-relaxed ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.desc}
                </p>

                <div className="mb-8 pb-6 border-b border-gray-200/30">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold font-raleway">
                      {billingCycle === "sprint" ? plan.sprintPrice : plan.retainerPrice}
                    </span>
                    <span className={`text-xs ml-2 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                      / {billingCycle === "sprint" ? plan.sprintPeriod : plan.retainerPeriod}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? "text-primary" : "text-gray-900"}`}>
                    What's Included:
                  </p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs leading-relaxed">
                      <FiCheck className={`mr-2.5 text-base flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-yellow-600"}`} />
                      <span className={plan.popular ? "text-gray-200" : "text-gray-700"}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="#contact"
                  className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm flex items-center justify-center transition-all duration-300 ${plan.popular
                    ? "bg-primary text-gray-950 hover:bg-yellow-600 shadow-lg shadow-yellow-500/20"
                    : "bg-gray-900 text-white hover:bg-primary hover:text-gray-950"
                    }`}
                >
                  <span>{plan.ctaText}</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
