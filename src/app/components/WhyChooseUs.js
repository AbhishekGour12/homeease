// components/WhyChooseUs.js
"use client"
import { motion } from 'framer-motion';
import { Shield, Clock, ThumbsUp, Users, Star, Award } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Fully Insured',
    description: 'All our professionals are fully insured for your peace of mind',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Availability',
    description: 'Emergency services available round the clock',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction or we\'ll make it right',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expert Professionals',
    description: 'Skilled and experienced service providers',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Top Rated',
    description: '4.9 average rating from 10,000+ reviews',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Certified',
    description: 'All professionals are certified and background-checked',
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just service providers – we're your home care partners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-white mb-6 transform rotate-3 hover:rotate-0 transition-transform`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '50+', label: 'Expert Professionals' },
            { number: '5K+', label: 'Projects Completed' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}