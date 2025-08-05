import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calculator as CalculatorIcon, CheckCircle } from 'lucide-react';

const Calculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [goldPrice, setGoldPrice] = useState(5920.50);
  const [goldWeight, setGoldWeight] = useState('');
  const [loanAmount, setLoanAmount] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const benefits = [
    'Instant Valuation',
    'Competitive Interest Rates',
    'No Credit Checks',
    'Flexible Repayment',
  ];

  useEffect(() => {
    // Simulate fetching gold price
    const fetchGoldPrice = async () => {
      try {
        // In a real app, this would be an API call
        const price = 5920.50 + Math.random() * 100;
        setGoldPrice(price.toFixed(2));
      } catch (error) {
        console.error('Error fetching gold price:', error);
      }
    };

    fetchGoldPrice();
  }, []);

  const calculateLoan = () => {
    if (!goldWeight || goldWeight <= 0) {
      setLoanAmount(0);
      return;
    }

    setIsCalculating(true);
    const weight = parseFloat(goldWeight);
    const price = parseFloat(goldPrice);
    const maxLoan = weight * price * 0.75; // 75% LTV

    // Animate the calculation
    setTimeout(() => {
      setLoanAmount(maxLoan);
      setIsCalculating(false);
    }, 500);
  };

  useEffect(() => {
    calculateLoan();
  }, [goldWeight, goldPrice]);

  return (
    <section id="calculator" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Calculate Your Gold Loan Eligibility
            </h2>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Use our Gold Loan Calculator to instantly find out how much you can borrow against your gold. Just enter the weight and purity of your gold, and get an accurate estimate of the loan amount, interest rate, and EMI options—within seconds.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-secondary-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8"
          >
            <div className="text-center mb-8">
              <CalculatorIcon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                Gold Loan Calculator
              </h3>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6 mb-6 text-center">
              <div className="text-sm text-secondary-600 mb-2">
                Today's Gold Price (per gram):
              </div>
              <div className="text-2xl font-bold text-primary-500">
                ₹{goldPrice.toLocaleString()}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Gold Weight (grams)
                </label>
                <input
                  type="number"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="e.g., 50"
                  min="0"
                  step="0.01"
                />
              </div>

              <motion.button
                className="w-full btn-primary text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateLoan}
              >
                Calculate My Loan Eligible Amount
              </motion.button>
            </div>

            {/* Result */}
            <motion.div
              className="mt-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold mb-4">Your Loan Eligibility:</h4>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                ₹{loanAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </div>
              <p className="text-sm opacity-90">
                Note: Final loan amount subject to verification of gold purity and weight at our branch.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator; 