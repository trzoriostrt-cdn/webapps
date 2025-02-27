import React from 'react';
import { Shield, Twitter, Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-trezor-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-trezor-green-400 mr-2" />
              <span className="text-2xl font-bold">Trēzor<span className="text-trezor-green-400">.io</span></span>
            </div>
            <p className="text-trezor-green-100 mb-6">
              The next generation platform for digital asset security and management. Start your journey to a safer digital ecosystem today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-trezor-green-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-trezor-green-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-trezor-green-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-trezor-green-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-trezor-green-200">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'Security', 'Ecosystem', 'Get Started', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="text-trezor-green-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-trezor-green-200">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Tutorials', 'Blog', 'Support Center', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-trezor-green-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-trezor-green-200">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-trezor-green-400 mr-3 mt-0.5" />
                <span className="text-trezor-green-100">support@trezor.io</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-trezor-green-400 mr-3 mt-0.5" />
                <span className="text-trezor-green-100">+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3 text-trezor-green-200">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-trezor-green-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-trezor-green-400 w-full"
                />
                <button className="bg-trezor-green-600 text-white px-4 py-2 rounded-r-md hover:bg-trezor-green-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-trezor-green-800 pt-8 mt-8 text-center text-trezor-green-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Trēzor.io. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;