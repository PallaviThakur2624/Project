"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300 py-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center mr-4">
          <span className="text-xl leading-none">{isOpen ? "×" : "+"}</span>
        </div>
        <h2 className="text-lg text-teal-900">{question}</h2>
      </div>
      {isOpen && (
        <p className="ml-10 mt-2 text-sm text-gray-800">{answer}</p>
      )}
    </div>
  );
};

const Faqs: React.FC = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      question: 'How do I book a device repair?',
      answer:
        'Simply select your device on the home page, describe the issue, and follow the steps to book a repair. You can also contact us for assistance.',
    },
    {
      question: 'What devices do you repair?',
      answer:
        'We repair a wide range of devices including smartphones, tablets, laptops, and more. If your device is not listed, contact us for a custom quote.',
    },
    {
      question: 'How long does a typical repair take?',
      answer:
        'Most repairs are completed within 24-48 hours, depending on the issue and parts availability. We will keep you updated throughout the process.',
    },
    {
      question: 'Is there a warranty on repairs?',
      answer:
        'Yes, we offer a warranty on all repairs. The duration and terms depend on the type of repair. Please ask our team for details.',
    },
    {
      question: 'How can I track my repair status?',
      answer:
        'After booking, you will receive a tracking link via email or SMS. You can also log in to your dashboard to view the status.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major cards, UPI, wallets, net banking, and cash on delivery. See the payment page for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf1fb] via-[#dbeafe] to-[#bac7e9] py-12 px-2 flex flex-col items-center justify-center">
      {/* Simple Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0033cc] mb-10 text-center">Frequently Asked Questions</h2>
      {/* FAQ Accordion */}
      <div className="max-w-2xl w-full mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-white/80 rounded-2xl shadow-lg transition border border-gray-100 hover:shadow-2xl ${openIndex === idx ? 'ring-2 ring-[#0033cc]/20' : ''}`}
          >
            <button
              className="w-full flex items-center justify-between px-8 py-6 focus:outline-none group"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="text-lg md:text-xl font-semibold text-left text-[#0033cc] group-hover:underline">
                {faq.question}
              </span>
              <span className="ml-4">
                {openIndex === idx ? (
                  <IconChevronUp size={28} className="text-[#0033cc]" />
                ) : (
                  <IconChevronDown size={28} className="text-[#0033cc]" />
                )}
              </span>
            </button>
            <div
              id={`faq-panel-${idx}`}
              className={`px-8 pb-6 text-gray-700 text-base transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      {/* Optional: Add a soft call-to-action at the bottom */}
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-8 text-center mt-12 border border-white/40">
        <h2 className="text-2xl font-semibold mb-2 text-[#0033cc]">Still have questions?</h2>
        <p className="text-gray-600 mb-4">Contact our support team and we'll be happy to help you out.</p>
        <a href="/contact-us" className="inline-block bg-[#0033cc] hover:bg-[#0022aa] text-white px-8 py-2 rounded-lg font-semibold transition text-base shadow">Contact Us</a>
      </div>
    </div>
  );
};

export default Faqs; 