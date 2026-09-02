"use client";

import CountUp from "react-countup";
import { FiDollarSign, FiCheckSquare, FiSmile, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: FiDollarSign,
      prefix: "$",
      count: 180,
      suffix: "M+",
      label: "Client Revenue Generated",
      sub: "Across funded partners",
    },
    {
      id: 2,
      icon: FiCheckSquare,
      prefix: "",
      count: 450,
      suffix: "+",
      label: "Production Deployments",
      sub: "Shipped on time & on budget",
    },
    {
      id: 3,
      icon: FiSmile,
      prefix: "",
      count: 99,
      suffix: ".8%",
      label: "Client Satisfaction & Retention",
      sub: "5-star enterprise feedback",
    },
    {
      id: 4,
      icon: FiTrendingUp,
      prefix: "",
      count: 4,
      suffix: "x",
      label: "Faster Time-to-Market",
      sub: "Compared to legacy agencies",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Proven Track Record</h2>
          <p className="text-2xl md:text-3xl font-bold font-raleway">Measurable Business Impact At Scale</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center p-8 bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-3xl" />
              </div>
              <div className="text-4xl lg:text-5xl font-black font-raleway text-white mb-2 flex items-center">
                <span>{stat.prefix}</span>
                <CountUp end={stat.count} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-gray-200 font-bold text-sm mb-1">{stat.label}</h3>
              <p className="text-gray-400 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
