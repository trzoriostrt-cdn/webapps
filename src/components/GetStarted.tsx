import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up for Trēzor.io with your email address and create a strong password to begin your journey."
  },
  {
    number: "02",
    title: "Set Up Security Features",
    description: "Configure multi-factor authentication and create your recovery phrase to ensure maximum protection."
  },
  {
    number: "03",
    title: "Connect Your Assets",
    description: "Link your digital assets to your Trēzor.io account using our secure integration process."
  },
  {
    number: "04",
    title: "Start Managing Securely",
    description: "Begin managing your digital portfolio with confidence, knowing your assets are protected by industry-leading security."
  }
];

const GetStarted: React.FC = () => {
  return (
    <section id="getstarted" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-trezor-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Begin Your Trēzor.io Journey
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Getting started with Trēzor.io is simple. Follow these steps to secure your digital future today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-trezor-green-50 rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-4 -top-4 bg-trezor-green-100 w-24 h-24 rounded-full opacity-50" />
              
              <div className="flex items-start">
                <span className="text-4xl font-bold text-trezor-green-200 mr-4">{step.number}</span>
                <div>
                  <h3 className="text-xl font-bold text-trezor-green-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-4 right-4 bg-trezor-green-600 rounded-full p-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <CheckCircle className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-trezor-green-700 to-trezor-green-600 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Digital Future?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and businesses who trust Trēzor.io with their digital asset security.
          </p>
          <motion.button 
            className="bg-white text-trezor-green-700 px-8 py-3 rounded-full font-medium inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;