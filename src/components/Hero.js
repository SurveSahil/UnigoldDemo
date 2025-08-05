import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Shield, Percent, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const features = [
    { icon: Clock, text: 'Quick Disbursal in 30 Minutes' },
    { icon: Shield, text: '100% Safe & Insured Storage' },
    { icon: Percent, text: 'Lowest Interest Rates' },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Thank you! We will contact you shortly.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="text-accent-400" size={16} />
              <span className="text-sm font-medium">India's Most Trusted Gold Loan Company</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Avail Your Gold Loan Now!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Get instant cash against your gold at competitive interest rates. 
              Quick, transparent, and hassle-free process with 100% secure storage.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <feature.icon className="text-accent-400" size={20} />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
                <ArrowRight size={20} />
              </motion.button>
              <motion.a
                href="tel:18003090620"
                className="btn-outline text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                  Quick Application Form
                </h3>
                <p className="text-secondary-600">Get instant loan approval</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Phone Number *
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
                    placeholder="Enter your 10-digit mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your street address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      {...register('city')}
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      {...register('pincode')}
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 