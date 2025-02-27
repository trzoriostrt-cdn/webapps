import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Shield className="h-8 w-8 text-trezor-green-600 mr-2" />
          <span className="text-2xl font-bold text-trezor-green-800">Trēzor<span className="text-trezor-green-600">.io</span></span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'Features', 'Security', 'Ecosystem', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-trezor-green-800 hover:text-trezor-green-600 font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="hidden md:flex items-center bg-trezor-green-600 text-white px-6 py-2 rounded-full font-medium"
          whileHover={{ scale: 1.05, backgroundColor: '#235e2c' }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ChevronRight className="ml-1 h-4 w-4" />
        </motion.button>
        
        <button 
          className="md:hidden text-trezor-green-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'Features', 'Security', 'Ecosystem', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-trezor-green-800 hover:text-trezor-green-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center bg-trezor-green-600 text-white px-6 py-2 rounded-full font-medium w-full justify-center">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;