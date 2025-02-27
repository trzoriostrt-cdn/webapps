import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Zap, RefreshCw, Globe, Key } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-trezor-green-600" />,
    title: 'Military-Grade Encryption',
    description: 'Protect your digital assets with the most advanced encryption protocols available today.'
  },
  {
    icon: <Lock className="h-8 w-8 text-trezor-green-600" />,
    title: 'Multi-Factor Authentication',
    description: 'Add multiple layers of security with our advanced authentication system.'
  },
  {
    icon: <Zap className="h-8 w-8 text-trezor-green-600" />,
    title: 'Instant Transactions',
    description: 'Experience lightning-fast transactions without compromising on security.'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-trezor-green-600" />,
    title: 'Automatic Backups',
    description: 'Never lose access to your assets with our secure automated backup system.'
  },
  {
    icon: <Globe className="h-8 w-8 text-trezor-green-600" />,
    title: 'Global Accessibility',
    description: 'Access your digital assets from anywhere in the world, anytime.'
  },
  {
    icon: <Key className="h-8 w-8 text-trezor-green-600" />,
    title: 'Private Key Control',
    description: 'Maintain complete control over your private keys for maximum security.'
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-trezor-green-100 p-3 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-trezor-green-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-trezor-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-trezor-green-800 mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why Trēzor.io is the preferred choice for securing digital assets in the modern era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;