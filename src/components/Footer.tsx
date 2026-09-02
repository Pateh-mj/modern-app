"use client";

import { useState } from "react";
import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin, FiMail, FiCheckCircle } from "react-icons/fi";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#home" className="text-3xl font-extrabold font-raleway tracking-wider inline-block">
              MODERN<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We design, engineer, and scale high-converting web applications, cloud backends, and AI pipelines for ambitious growing businesses.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { icon: FiLinkedin, href: "https://linkedin.com" },
                { icon: FiTwitter, href: "https://twitter.com" },
                { icon: FiGithub, href: "https://github.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-900 border border-gray-800 p-2.5 rounded-lg hover:border-primary hover:text-primary transition-colors text-gray-300"
                >
                  <item.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Capabilities</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {["Next.js Web Platforms", "Cloud & Backend Architecture", "AI Automation Pipelines", "UI/UX Product Design", "Cybersecurity & SOC-2", "Dedicated Growth Squads"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {["About Our Process", "Client Case Studies", "Pricing & Sprints", "Client Reviews", "Frequently Asked Questions", "Careers & Hiring"].map((item) => (
                <li key={item}>
                  <Link href="#about" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Engineering Insights</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Get our monthly teardown on web performance, modern AI architecture, and conversion design.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30">
                <FiCheckCircle className="text-sm flex-shrink-0" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="space-y-2"
              >
                <div className="relative">
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-gray-950 font-bold py-2.5 rounded-lg text-xs hover:bg-yellow-400 transition-colors shadow-sm"
                >
                  Join 12,000+ Founders
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99%)</span>
            </span>
            <span>•</span>
            <span>SOC-2 Type II Certified</span>
          </div>

          <div>
            <p>&copy; {new Date().getFullYear()} Modern App Digital Engineering Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
