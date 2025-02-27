import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-white to-trezor-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-trezor-green-800 leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Secure Your Digital Future with <span className="text-trezor-green-600">Trēzor.io</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The next generation platform for digital asset security and management. 
              Start your journey to a safer digital ecosystem today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button 
                className="bg-trezor-green-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center"
                whileHover={{ scale: 1.05, backgroundColor: '#235e2c' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <Zap className="ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.button 
                className="border-2 border-trezor-green-600 text-trezor-green-600 px-8 py-3 rounded-full font-medium flex items-center justify-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(35, 94, 44, 0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative z-10 bg-white p-8 rounded-2xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute -top-4 -left-4 bg-trezor-green-600 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Digital security visualization" 
                className="w-full h-auto rounded-lg mb-6"
              />
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-trezor-green-100 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-trezor-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-trezor-green-800">Advanced Security</h3>
                  <p className="text-sm text-gray-600">Multi-layer protection for your assets</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    className="h-2 w-2 rounded-full bg-trezor-green-600"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-trezor-green-200 rounded-full opacity-30 blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;