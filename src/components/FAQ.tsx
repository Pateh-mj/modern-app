"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "How fast can we kick off a new engagement?",
    answer:
      "Most client sprints kick off within 5 to 7 business days following our initial discovery call and scope alignment. We assemble a dedicated team tailored specifically to your tech stack and deliverables.",
  },
  {
    question: "Do we retain 100% ownership of the code, designs, and IP?",
    answer:
      "Yes, absolutely. Upon milestone completion and settlement, 100% of all intellectual property, source repositories, design files (Figma), and architectural documentation are fully transferred and owned by your company.",
  },
  {
    question: "How do you ensure seamless communication during the project?",
    answer:
      "We integrate directly into your workflow. We establish a shared Slack/Discord channel, provide a live Linear/Jira dashboard, and conduct bi-weekly sprint demos and asynchronous Loom video updates.",
  },
  {
    question: "Can you collaborate with or augment our existing in-house engineers?",
    answer:
      "Yes. Our teams regularly operate in embedded squad models, pairing directly with internal CTOs, engineering leads, or product managers following your pull request reviews and Git guidelines.",
  },
  {
    question: "What post-launch support and warranty do you provide?",
    answer:
      "Every project delivery includes a complimentary 30-day bug fix warranty and performance monitoring window. We also offer dedicated monthly SLA maintenance and continuous growth retainers.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiHelpCircle className="text-primary text-sm" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Everything you need to know about partnering with us, delivery processes, and technical standards.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-gray-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold font-raleway text-gray-900">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`text-xl text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
