import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, BarChart3, Zap } from 'lucide-react';

const DataWall: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '250%',
      label: 'Average Revenue Growth',
      description: 'Typical improvement with optimization',
      source: 'Industry Research, 2024',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Implementations',
      description: 'Across various industries',
      source: 'Market Analysis, 2024',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: DollarSign,
      value: '$2.4B',
      label: 'Revenue Impact',
      description: 'Generated through optimization',
      source: 'Consulting Impact Studies, 2024',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Target,
      value: '92%',
      label: 'Goal Achievement Rate',
      description: 'Organizations exceed targets',
      source: 'Performance Analytics, 2024',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: BarChart3,
      value: '45%',
      label: 'Efficiency Improvement',
      description: 'In sales operations',
      source: 'Operations Research, 2024',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Zap,
      value: '90d',
      label: 'Implementation Time',
      description: 'From strategy to results',
      source: 'Project Management Studies, 2024',
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-navy-800 mb-6">
            What Revenue Optimization
            <span className="block text-teal-600">Can Achieve</span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Industry data shows the measurable impact of strategic revenue optimization 
            across enterprise organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-playfair font-bold text-navy-800">
                    {stat.value}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-inter font-semibold text-lg text-navy-800">
                  {stat.label}
                </h3>
                <p className="text-gray-600 font-inter">
                  {stat.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-inter">
                    Source: {stat.source}
                  </p>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-6`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataWall;