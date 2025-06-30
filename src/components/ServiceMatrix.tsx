import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Target, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const ServiceMatrix: React.FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Revenue Operations',
      description: 'End-to-end revenue process optimization and automation',
      timeline: '8-12 weeks',
      features: [
        'Sales process automation',
        'Revenue forecasting models',
        'Performance analytics dashboard',
        'CRM optimization',
        'Lead scoring algorithms'
      ],
      outcomes: [
        '40% increase in sales velocity',
        '25% improvement in forecast accuracy',
        '60% reduction in manual tasks'
      ],
      color: 'from-blue-500 to-blue-700',
      badge: 'Most Popular'
    },
    {
      icon: Target,
      title: 'Strategy Consultation',
      description: 'Executive-level strategic planning and revenue optimization',
      timeline: '4-8 weeks',
      features: [
        'Revenue strategy development',
        'Market opportunity analysis',
        'Competitive positioning',
        'Growth roadmap planning',
        'Executive advisory sessions'
      ],
      outcomes: [
        '3x faster strategic alignment',
        '45% improvement in market positioning',
        '85% executive satisfaction rate'
      ],
      color: 'from-purple-500 to-purple-700',
      badge: 'Strategic'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-navy-800 mb-6">
            Comprehensive
            <span className="block text-teal-600">Service Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Tailored solutions that address every aspect of revenue optimization, 
            from strategy to implementation and ongoing support.
          </p>
        </motion.div>

        {/* Centered Services Grid */}
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-inter font-medium">
                      {service.badge}
                    </div>
                  </div>
                  <h3 className="font-playfair font-bold text-2xl mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter opacity-90">
                    {service.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Timeline */}
                  <div className="flex items-center space-x-2 mb-6 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter text-sm">Timeline: {service.timeline}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-navy-800 mb-3">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-inter text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-navy-800 mb-3">
                      Expected Outcomes
                    </h4>
                    <div className="space-y-2">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="bg-gray-50 rounded-lg p-3">
                          <span className="text-sm font-inter text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-inter font-semibold flex items-center justify-center space-x-2 transition-all duration-200`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair font-bold text-3xl text-navy-800 mb-4">
                  Custom Solutions Available
                </h3>
                <p className="text-lg text-gray-600 font-inter mb-6">
                  Every organization is unique. We offer bespoke solutions tailored 
                  to your specific industry, scale, and objectives.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-playfair font-bold text-navy-800">24/7</div>
                    <div className="text-sm font-inter text-gray-600">Support</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-playfair font-bold text-navy-800">100%</div>
                    <div className="text-sm font-inter text-gray-600">Customizable</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-navy-800 hover:bg-navy-900 text-white font-inter font-semibold rounded-lg transition-colors duration-200 space-x-2"
                >
                  <span>Discuss Custom Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceMatrix;