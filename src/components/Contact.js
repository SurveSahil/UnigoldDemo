import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['1800 309 0620 (Toll Free)', '9777700511'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['care@unigoldfinance.com'],
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Head Office: 123 Finance Street, Mumbai, India'],
    },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Thank you for your message! We will get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-secondary-600 mb-12 leading-relaxed">
              Ready to unlock the value of your gold? Contact us today for a hassle-free gold loan experience.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary-800 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-secondary-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-6 text-center">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number'
                    }
                  })}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Your Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 