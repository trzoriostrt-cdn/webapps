import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Laptop, Server, Globe, Wallet, Shield } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="ecosystem" className="py-20 bg-trezor-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-trezor-green-800 mb-4">
            The Trēzor.io Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive platform designed to secure and manage your digital assets across multiple environments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
                <Smartphone className="h-8 w-8 text-trezor-green-600" />
              </div>
              <h3 className="text-xl font-bold text-trezor-green-800 mb-2">Mobile Application</h3>
              <p className="text-gray-600 mb-4">
                Secure your digital assets on the go with our intuitive mobile application. Available for iOS and Android devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Biometric authentication</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Offline transaction signing</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Real-time security alerts</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
                <Laptop className="h-8 w-8 text-trezor-green-600" />
              </div>
              <h3 className="text-xl font-bold text-trezor-green-800 mb-2">Desktop Client</h3>
              <p className="text-gray-600 mb-4">
                Our powerful desktop application provides advanced features for managing your digital portfolio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Advanced portfolio analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Multi-signature support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Automated backup system</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
                <Server className="h-8 w-8 text-trezor-green-600" />
              </div>
              <h3 className="text-xl font-bold text-trezor-green-800 mb-2">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored security solutions for businesses managing significant digital assets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Compliance reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">API integration capabilities</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
                <Globe className="h-8 w-8 text-trezor-green-600" />
              </div>
              <h3 className="text-xl font-bold text-trezor-green-800 mb-2">Web Platform</h3>
              <p className="text-gray-600 mb-4">
                Access your assets from any browser with our secure web interface.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Cross-device synchronization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Browser extension integration</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Session timeout protection</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
                <Wallet className="h-8 w-8 text-trezor-green-600" />
              </div>
              <h3 className="text-xl font-bold text-trezor-green-800 mb-2">Hardware Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration with leading hardware security devices for maximum protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Hardware wallet support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Cold storage solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Physical security key integration</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-trezor-green-600" />
              </div>
              <h3 className="text-xl font-bold text-trezor-green-800 mb-2">Security Network</h3>
              <p className="text-gray-600 mb-4">
                Our distributed security network ensures your assets remain protected at all times.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">24/7 monitoring system</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Threat intelligence integration</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-trezor-green-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Anomaly detection algorithms</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;