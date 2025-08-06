import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gold Loan', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:18003090620" className="flex items-center space-x-2 hover:text-accent-400 transition-colors">
                <Phone size={16} />
                <span>1800 309 0620 (Toll Free)</span>
              </a>
              <a href="mailto:care@unigoldfinance.com" className="flex items-center space-x-2 hover:text-accent-400 transition-colors">
                <Mail size={16} />
                <span>care@unigoldfinance.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-accent-400 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-accent-400 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="hover:text-accent-400 transition-colors"><Instagram size={16} /></a>
              <a href="#" className="hover:text-accent-400 transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom py-2">
          <div className="flex items-center justify-between">
            {/* Logo - Full Height */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={Logo} 
                alt="UniGold Finance" 
                className="h-16 w-auto object-contain"
              />
            </motion.div>

            <div className="hidden md:flex items-center justify-end flex-grow">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="font-semibold transition-all duration-300 text-white hover:text-accent-400"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 ml-8">
                <motion.button
                  className="btn-accent text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="block">WE ARE</span>
                  <span className="block">HIRING</span>
                </motion.button>
                <motion.a
                  href="tel:18003090620"
                  className="bg-primary-500 text-white font-bold px-4 py-2 rounded-lg border-2 border-accent-500 flex items-center space-x-2 hover:bg-accent-500 hover:text-secondary-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={16} />
                  <span className="text-sm">
                    <span className="block">CALL</span>
                    <span className="block">US</span>
                  </span>
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden bg-primary-500 border-t border-white/20 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-white font-semibold text-lg py-2 border-b border-white/20 hover:text-accent-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
