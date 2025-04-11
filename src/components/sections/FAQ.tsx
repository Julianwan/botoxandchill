"use client";

import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/20 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-5 px-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-serif">{question}</h3>
        <span className="text-primary text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What qualifies me for your services?",
      answer: "We exclusively serve clients who subscribe to the most expensive Netflix tier and have a verified high net worth. Our concierge will discreetly verify your financial status before your first appointment. If you have to ask about prices, this might not be the right med spa for you."
    },
    {
      question: "How long do results typically last?",
      answer: "Our luxury treatments last significantly longer than standard procedures—approximately as long as it takes to deplete your first trust fund. For more specific timelines, our specialists can provide personalized estimates during your consultation."
    },
    {
      question: "Is there any downtime after treatments?",
      answer: "Minimal downtime is required, just enough to fly to your private island for a weekend of recovery. Most clients resume their regular champagne brunches and yacht parties within 24-48 hours."
    },
    {
      question: "Do you offer payment plans?",
      answer: "We prefer not to dilute the exclusivity of our experience with payment plans. However, we do accept all major credit cards with no spending limits, cryptocurrency, and direct transfers from offshore accounts."
    },
    {
      question: "Can I book appointments for my entourage?",
      answer: "Absolutely! We offer special group packages for you and your entourage. Our VIP suite can accommodate up to 5 people simultaneously, ensuring you never have to be beautiful alone."
    },
    {
      question: "What makes your treatments different from regular med spas?",
      answer: "Our treatments are infused with rare ingredients sourced from locations so exclusive they don't appear on maps. Our Botox is mixed with diamond dust, and our fillers contain essence of meteorite. Plus, our practitioners have beautified celebrities so famous we're legally not allowed to name them."
    },
    {
      question: "Do you offer NDAs for privacy?",
      answer: "We automatically provide NDAs with all services. Your visit to Botox & Chill is more confidential than your offshore banking arrangements. Our staff undergoes memory-wiping training to forget your face immediately after your treatment."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about our exclusive services, answered with the discretion our elite clientele expects.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-background rounded-lg p-8 luxury-border">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300">
            Have more questions? Our dedicated concierge is available for our most distinguished clients.
          </p>
          <a href="#contact" className="inline-block mt-4 btn-luxury px-8 py-3 rounded-full">
            Contact Our Concierge
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
