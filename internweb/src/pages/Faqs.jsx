import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide AI solutions, web development, data analytics, and enterprise software tailored to business needs.",
  },
  {
    question: "Do you build static or dynamic websites?",
    answer:
      "We develop both static and dynamic websites using React, Next.js, and FastAPI.",
  },
  {
    question: "Can AI be integrated into existing systems?",
    answer:
      "Yes, AI modules can be integrated into your current systems via APIs.",
  },
  {
    question: "What is WellNest AI Station?",
    answer:
      "It is an AI-powered medical kiosk providing diagnostics and telemedicine services.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0A2A66]">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>

                  <span className="text-xl text-[#0A2A66]">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600">
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
    </div>
  );
};

export default FAQ;