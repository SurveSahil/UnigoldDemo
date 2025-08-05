import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: 'General Queries',
      questions: [
        {
          question: 'What are the benefits of gold loan?',
          answer: 'Loan against gold is the easiest and the simplest way to fulfill your financial needs. Gold loans offers the following benefits: Simple documentation, Fast loan disbursal, Customer oriented, In-house gold evaluation, No penalty on pre-payment'
        },
        {
          question: 'Eligibility to avail Gold loan?',
          answer: 'Any Indian citizen above the age of 21 years is eligible to avail a loan. All they are required to do is provide the required documents along with the gold ornaments.'
        }
      ]
    },
    {
      category: 'Loan Related Queries',
      questions: [
        {
          question: 'What is the tenure of Gold loan?',
          answer: 'The tenure of a gold loan is dependent on the schemes availed. However, the minimum tenure is 7 days.'
        },
        {
          question: 'Does availing Gold loan require a guarantor?',
          answer: 'There is no requirement of any guarantor. The only security that is needed is the gold.'
        },
        {
          question: 'Can I avail loan against any ornament?',
          answer: 'You can pledge any type of Gold ornaments. However, the valuation will be done only of Gold and not of the stones.'
        }
      ]
    },
    {
      category: 'Payment Related Queries',
      questions: [
        {
          question: 'What are the different options available for repayment?',
          answer: 'We offer two options to our customers for repayment: Bullet payment - Here you can make the principal and interest payment at once and release your gold. EMI - You can avail gold loan on monthly repayment basis depending on the gold loan scheme you opt for.'
        },
        {
          question: 'How can I repay the loan amount?',
          answer: 'You can repay loan at any of our Gold loan branches through cash and cheque. You can also repay your EMI through our online web facility.'
        },
        {
          question: 'Is partial repayment of gold loan allowed?',
          answer: 'The payment of loan and interest depends on the scheme you have selected. However, to make it convenient for our customers we do accept partial repayment. But do remember, you will get your pledged gold ornaments only after full repayment of principal and interest.'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Find answers to common questions about our gold loan services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-primary-500 mb-8">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    className="card overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors"
                    >
                      <span className="font-semibold text-secondary-800 text-lg">
                        {item.question}
                      </span>
                      {activeIndex === `${categoryIndex}-${index}` ? (
                        <ChevronUp className="text-primary-500" size={20} />
                      ) : (
                        <ChevronDown className="text-secondary-400" size={20} />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeIndex === `${categoryIndex}-${index}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-secondary-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 