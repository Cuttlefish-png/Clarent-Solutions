import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, Rocket, CheckCircle } from 'lucide-react';

const MethodologyFramework: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: 'Diagnose',
      icon: Search,
      duration: '2-4 weeks',
      description: 'Comprehensive revenue audit and opportunity identification',
      activities: [
        'Revenue stream analysis',
        'Process optimization audit',
        'Technology stack evaluation',
        'Competitive benchmarking'
      ],
      stat: '87% of issues identified',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 2,
      title: 'Architect',
      icon: Wrench,
      duration: '4-6 weeks',
      description: 'Strategic framework design and system architecture',
      activities: [
        'Revenue model redesign',
        'Process automation blueprint',
        'Technology integration plan',
        'Performance metrics framework'
      ],
      stat: '65% efficiency gain',
      color: 'from-teal-400 to-teal-600'
    },
    {
      id: 3,
      title: 'Execute',
      icon: Rocket,
      duration: '6-8 weeks',
      description: 'Implementation, optimization, and performance monitoring',
      activities: [
        'System implementation',
        'Process automation deployment',
        'Performance optimization',
        'Continuous improvement'
      ],
      stat: '85% success rate',
      color: 'from-green-400 to-green-600'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-navy-800 mb-6">
            Our Proven
            <span className="block text-teal-600">Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            A systematic approach to revenue optimization that has delivered 
            consistent results across 500+ enterprise implementations.
          </p>
        </motion.div>

        {/* Circular Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              {/* Central Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-playfair font-bold mb-2">12-18 Weeks</div>
                  <div className="text-sm font-inter opacity-80">Total Timeline</div>
                </div>
              </div>

              {/* Phase Circles */}
              {phases.map((phase, index) => {
                const angle = (index * 120) - 90; // Start from top, 120 degrees apart
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={phase.id}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute w-24 h-24 lg:w-28 lg:h-28"
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                    }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-lg`}>
                      <phase.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="font-inter font-semibold text-navy-800 text-sm lg:text-base">
                        {phase.title}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                {phases.map((_, index) => {
                  const startAngle = (index * 120) - 90;
                  const endAngle = ((index + 1) * 120) - 90;
                  const radius = 140;
                  
                  const startX = Math.cos((startAngle * Math.PI) / 180) * radius + 192;
                  const startY = Math.sin((startAngle * Math.PI) / 180) * radius + 192;
                  const endX = Math.cos((endAngle * Math.PI) / 180) * radius + 192;
                  const endY = Math.sin((endAngle * Math.PI) / 180) * radius + 192;

                  return (
                    <motion.line
                      key={index}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="rgba(31, 194, 215, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  );
                })}
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Phase Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-inter text-gray-500">Duration</div>
                  <div className="font-inter font-semibold text-navy-800">{phase.duration}</div>
                </div>
              </div>

              <h3 className="font-playfair font-bold text-2xl text-navy-800 mb-3">
                {phase.title}
              </h3>
              
              <p className="text-gray-600 font-inter mb-6">
                {phase.description}
              </p>

              <div className="space-y-3 mb-6">
                {phase.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-inter text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-playfair font-bold text-navy-800">
                    {phase.stat}
                  </div>
                  <div className="text-sm text-gray-500 font-inter">
                    Typical outcome
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-navy-800 rounded-2xl p-8 lg:p-12">
            <h3 className="font-playfair font-bold text-3xl text-white mb-4">
              Ready to Transform Your Revenue?
            </h3>
            <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Schedule a consultation to see how our methodology can be customized for your organization.
            </p>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-inter font-semibold rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyFramework;