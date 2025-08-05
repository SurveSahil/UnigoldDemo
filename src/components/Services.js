import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gem, DollarSign, Shield, FileText } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Gem,
      title: 'Gold Valuation',
      description: 'Professional gold assessment with certified methods to determine accurate value of your gold ornaments.',
    },
    {
      icon: DollarSign,
      title: 'Instant Disbursal',
      description: 'Get your loan amount credited to your account within 30 minutes of gold verification.',
    },
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'Your gold is stored in RBI-approved vaults with 24/7 monitoring and full insurance coverage.',
    },
    {
      icon: FileText,
      title: 'Minimal Documentation',
      description: 'Simple KYC process with just Aadhaar and PAN card. No income proof required.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Gold Loan Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            With Unigold finance you can easily fulfill all your personal and business requirements instantly through our hassle free gold loan sanctions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover p-8 text-center group"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold text-secondary-800 mb-4">
                {service.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 