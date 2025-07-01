import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ContactPortal: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [challenge, setChallenge] = useState('');

  useEffect(() => {
    if (window.location.search.includes('success')) {
      setShowSuccess(true);
    }
  }, []);

  const revenueRanges = [
    'Under $10M',
    '$10M - $50M',
    '$50M - $100M',
    '$100M - $500M',
    '$500M - $1B',
    'Over $1B'
  ];

  const challenges = [
    'Revenue Growth Stagnation',
    'Sales Process Inefficiencies',
    'Technology Integration Issues',
    'Team Performance Gaps',
    'Data & Analytics Challenges',
    'Market Positioning Problems',
    'Competitive Disadvantage',
    'Scaling Operations',
    'Customer Retention Issues',
    'Other (please specify)'
  ];

  const timelines = [
    'Immediate (< 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Just exploring options'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-navy-800 mb-6">
            Start Your Revenue
            <span className="block text-teal-600">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Tell us about your specific challenges and objectives. Our revenue engineering 
            experts will design a customized approach to accelerate your growth.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Centered Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair font-bold text-2xl text-navy-800 mb-6 text-center">
                Describe Your Challenge
              </h3>

              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="font-playfair font-bold text-xl text-navy-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600 font-inter mb-4">
                    We've received your submission and will analyze your requirements.
                  </p>
                  <p className="text-gray-600 font-inter">
                    Expect to hear from us within 24 hours with a customized approach.
                  </p>
                </motion.div>
              ) : (
                <form 
                  name="consult-contact" 
                  method="POST" 
                  data-netlify="true" 
                  className="space-y-6"
                  action="/thank-you"
                >
                  <input type="hidden" name="form-name" value="consult-contact" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Annual Revenue *
                    </label>
                    <input
                      type="text"
                      name="revenue"
                      required
                      placeholder="$10M - $50M (example)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Primary Challenge *
                    </label>
                    <select
                      name="challenge"
                      required
                      value={challenge}
                      onChange={e => setChallenge(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select your primary challenge</option>
                      {challenges.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {challenge === 'Other (please specify)' && (
                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                        Please Describe Your Challenge *
                      </label>
                      <textarea
                        name="otherChallenge"
                        rows={3}
                        required
                        placeholder="Please describe the specific challenge you're facing..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Timeline for Solution *
                    </label>
                    <select
                      name="timeline"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Provide Us With More Information
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Share additional context about your situation, what you've tried, success metrics, or any other relevant details..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-lg font-inter font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                  >
                    Submit Challenge & Get Custom Solution
                  </button>
                  <p className="text-sm text-gray-500 font-inter text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPortal;