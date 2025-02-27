import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, Lock, Key } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Advanced Encryption Protocols",
    icon: <Shield className="h-12 w-12 text-trezor-green-600" />,
    content: "Trēzor.io employs state-of-the-art encryption algorithms that exceed industry standards. Our multi-layered approach ensures your digital assets remain impenetrable to unauthorized access attempts.",
    bullets: [
      "AES-256 encryption for all stored data",
      "Elliptic Curve Cryptography for transactions",
      "Zero-knowledge proof technology",
      "Quantum-resistant encryption methods"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Multi-Factor Authentication",
    icon: <Lock className="h-12 w-12 text-trezor-green-600" />,
    content: "Security is only as strong as its authentication process. Trēzor.io implements a robust multi-factor authentication system that verifies your identity through multiple independent channels.",
    bullets: [
      "Biometric verification options",
      "Time-based one-time passwords (TOTP)",
      "Hardware security key integration",
      "Geolocation verification"
    ],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Self-Custody Solution",
    icon: <Key className="h-12 w-12 text-trezor-green-600" />,
    content: "With Trēzor.io, you maintain complete control over your digital assets. Our self-custody solution ensures that only you have access to your private keys, eliminating third-party risks.",
    bullets: [
      "Full private key ownership",
      "Secure key generation process",
      "Encrypted backup solutions",
      "Recovery phrase protection"
    ],
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const SecuritySlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="security" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-trezor-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Uncompromising Security
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how Trēzor.io sets new standards in digital asset protection.
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="flex flex-col md:flex-row items-center bg-trezor-green-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {slides[currentSlide].icon}
                  <h3 className="text-2xl font-bold text-trezor-green-800 ml-4">
                    {slides[currentSlide].title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {slides[currentSlide].content}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {slides[currentSlide].bullets.map((bullet, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? 'bg-trezor-green-600' : 'bg-trezor-green-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="h-6 w-6 text-trezor-green-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="h-6 w-6 text-trezor-green-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySlider;