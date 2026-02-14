// components/CTASection.js
"use client"
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book any service today and get 20% off your first booking. Our professionals are ready to help!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
            >
              Book Now <ArrowRight size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone size={18} /> Call Us 24/7
            </motion.button>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            No hidden fees • Free estimates • 100% satisfaction guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}