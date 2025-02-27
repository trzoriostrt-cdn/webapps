import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Key, RefreshCw, Globe } from 'lucide-react';

const MainContent: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-trezor-green-800 mb-6 text-center">
            Welcome to Trēzor.io/start
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              In an era where digital assets have become increasingly valuable, the need for robust security measures has never been more critical. Trēzor.io emerges as the definitive solution for individuals and enterprises seeking uncompromising protection for their digital wealth. Our platform combines cutting-edge encryption technology with intuitive user experience, setting a new standard in the digital security landscape.
            </p>
            
            <p>
              Trēzor.io isn't just another security solution—it's a comprehensive ecosystem designed from the ground up to address the evolving challenges of digital asset protection. By implementing military-grade encryption protocols and multi-factor authentication systems, we've created an impenetrable fortress for your digital valuables. Our approach to security is proactive rather than reactive, constantly evolving to stay ahead of potential threats.
            </p>
            
            <h3 className="text-2xl font-bold text-trezor-green-700 mt-8 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-trezor-green-600" />
              Revolutionary Security Architecture
            </h3>
            
            <p>
              At the core of Trēzor.io lies a revolutionary security architecture that leverages advanced cryptographic algorithms to ensure your assets remain protected at all times. Unlike conventional security systems that rely on centralized infrastructure, our distributed security network eliminates single points of failure, making it virtually impossible for malicious actors to compromise your assets.
            </p>
            
            <p>
              The platform employs a unique combination of AES-256 encryption, elliptic curve cryptography, and zero-knowledge proof technology to create multiple layers of protection. This multi-layered approach ensures that even in the unlikely event of one security measure being compromised, your assets remain secure behind additional protective barriers.
            </p>
            
            <h3 className="text-2xl font-bold text-trezor-green-700 mt-8 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2 text-trezor-green-600" />
              User-Centric Design Philosophy
            </h3>
            
            <p>
              While security remains our primary focus, we understand that even the most secure system is ineffective if it's too complex to use. That's why Trēzor.io has been designed with a user-centric philosophy, ensuring that advanced security features are accessible to users of all technical backgrounds. Our intuitive interface guides you through the process of securing your digital assets without overwhelming you with technical jargon.
            </p>
            
            <p>
              The platform's dashboard provides a comprehensive overview of your digital portfolio, allowing you to monitor and manage your assets with ease. Real-time security alerts keep you informed of any unusual activity, while our automated backup system ensures you never lose access to your valuable assets.
            </p>
            
            <h3 className="text-2xl font-bold text-trezor-green-700 mt-8 mb-4 flex items-center">
              <Key className="h-6 w-6 mr-2 text-trezor-green-600" />
              Complete Control Over Your Digital Assets
            </h3>
            
            <p>
              Trēzor.io operates on the principle that true security comes from ownership. Unlike many digital asset management platforms that maintain control over your private keys, Trēzor.io ensures that you—and only you—have access to the cryptographic keys that secure your assets. This self-custody approach eliminates third-party risks and gives you complete control over your digital wealth.
            </p>
            
            <p>
              Our secure key generation process creates cryptographically strong private keys that are encrypted and stored on your device. The platform also provides multiple options for backing up your keys, including encrypted digital backups and physical security cards, ensuring you never lose access to your assets.
            </p>
            
            <h3 className="text-2xl font-bold text-trezor-green-700 mt-8 mb-4 flex items-center">
              <RefreshCw className="h-6 w-6 mr-2 text-trezor-green-600" />
              Continuous Innovation and Adaptation
            </h3>
            
            <p>
              The digital security landscape is constantly evolving, with new threats emerging regularly. Trēzor.io stays ahead of these challenges through continuous innovation and adaptation. Our team of security experts constantly monitors the threat landscape, implementing proactive measures to address potential vulnerabilities before they can be exploited.
            </p>
            
            <p>
              Regular security updates ensure that your assets remain protected against the latest threats, while our advanced anomaly detection algorithms identify and neutralize suspicious activities before they can compromise your security. This commitment to continuous improvement makes Trēzor.io not just a security solution for today, but a future-proof investment in your digital safety.
            </p>
            
            <h3 className="text-2xl font-bold text-trezor-green-700 mt-8 mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-trezor-green-600" />
              A Global Ecosystem for Digital Asset Security
            </h3>
            
            <p>
              Trēzor.io is more than just a security platform—it's a global ecosystem that connects users, developers, and security experts in a collaborative effort to enhance digital asset protection. Our open API allows for seamless integration with third-party services, while our developer community continuously contributes to improving the platform's capabilities.
            </p>
            
            <p>
              Whether you're an individual looking to secure your personal digital assets or an enterprise managing a complex digital portfolio, Trēzor.io provides the tools and infrastructure you need to achieve peace of mind in the digital age. Join our growing community of security-conscious users and take the first step towards a safer digital future.
            </p>
            
            <div className="bg-trezor-green-50 p-6 rounded-xl mt-8 border-l-4 border-trezor-green-600">
              <p className="font-bold text-trezor-green-800 mb-2">Begin Your Journey Today</p>
              <p className="mb-0">
                Ready to experience the next generation of digital asset security? Visit Trēzor.io/start now to create your account and take control of your digital future. Our step-by-step onboarding process will guide you through securing your assets with the most advanced protection available today.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainContent;