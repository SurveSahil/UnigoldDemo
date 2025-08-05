import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 50000, suffix: '+', label: 'Happy Customers' },
    { number: 500, suffix: 'Cr+', label: 'Loans Disbursed' },
    { number: 100, suffix: '+', label: 'Branches' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              UNIGOLD FINANCE LTD
            </h2>
            <div className="space-y-6 text-secondary-700 text-lg leading-relaxed">
              <p>
                UNIGOLD Finance is a consumer finance registered NBFC, founded and backed by ultra-high net worth individuals and family offices. The NBFC focuses on providing easy gold loans to the customers and develop a personal touchpoint through an offline sourcing model.
              </p>
              <p>
                We aim to become one of the top and most trusted financing partners for all segments of society. We believe that through a hassle-free loan process, operational efficiency, and customer delight we can achieve our target in a very short period.
              </p>
              <p>
                Professionals with rich experience have been entrusted with our business to help us advance as the leader in gold financing. Our organization is built on the premise that employees should be given leadership opportunities regardless of the role they play.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card card-hover p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      separator=","
                    />
                  )}
                  {stat.suffix}
                </div>
                <div className="text-secondary-600 font-semibold text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 