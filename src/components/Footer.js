import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Gold Loan', href: '#services' },
      { name: 'Calculator', href: '#calculator' },
      { name: 'FAQs', href: '#faq' },
    ],
    'Services': [
      { name: 'Gold Loan', href: '#services' },
      { name: 'Loan Calculator', href: '#calculator' },
      { name: 'Why Choose Us', href: '#why-us' },
      { name: 'Contact', href: '#contact' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Fair Practice Code', href: '#' },
      { name: 'Grievance Redressal', href: '#' },
    ],
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/UnigoldLogo.jpg" 
                alt="UniGold Finance" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-white font-bold text-lg">UNIGOLD FINANCE™</div>
                <div className="text-accent-400 text-sm font-medium">GOLD LOAN</div>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              UniGold Finance is a leading NBFC dedicated to providing instant and transparent gold loans. 
              We help you unlock the value of your gold to meet your financial goals.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-secondary-900 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-secondary-900 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-secondary-900 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-secondary-900 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="text-accent-400" size={20} />
              <div>
                <div className="text-sm text-secondary-400">Call Us</div>
                <div className="font-semibold">1800 309 0620 (Toll Free)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-accent-400" size={20} />
              <div>
                <div className="text-sm text-secondary-400">Email Us</div>
                <div className="font-semibold">care@unigoldfinance.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-accent-400" size={20} />
              <div>
                <div className="text-sm text-secondary-400">Visit Us</div>
                <div className="font-semibold">Head Office: Mumbai, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 pt-8 mt-8 text-center">
          <p className="text-secondary-400">
            © 2024 UniGold Finance Ltd. All Rights Reserved. | Jiyo Zindagi Haq Se!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 