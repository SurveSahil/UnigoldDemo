import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Percent, Shield, FileText, Users, Award } from 'lucide-react';

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: 'Quick Disbursal',
      description: 'Funds are transferred to your account in as little as 30 minutes after gold verification.',
    },
    {
      icon: Percent,
      title: 'Low Interest Rates',
      description: 'We offer the most competitive and affordable interest rates in the market, lower than personal loans.',
    },
    {
      icon: Shield,
      title: 'Maximum Security',
      description: 'Your gold is stored in secure, 24/7 monitored vaults and is fully insured for complete peace of mind.',
    },
    {
      icon: FileText,
      title: 'Minimal Documentation',
      description: 'A simple and straightforward process with basic KYC documents. No income proof required.',
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Offline sourcing model with personal touchpoint for better customer experience and trust.',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Professionals with rich experience in gold financing to provide you the best service.',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            WHY US
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            With Unigold finance you can easily fulfill all your personal and business requirements instantly through our hassle free gold loan sanctions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover p-8 text-center group"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold text-secondary-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 