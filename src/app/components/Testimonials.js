// components/Testimonials.js
"use client"
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: '/api/placeholder/100/100',
    content: 'The plumber arrived within 30 minutes and fixed the issue perfectly. Excellent service!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    image: '/api/placeholder/100/100',
    content: 'We use HomeEase for all our properties. Their gardeners and cleaners are exceptional.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    image: '/api/placeholder/100/100',
    content: 'The home decorators are incredibly talented. They transformed the space beautifully.',
    rating: 5
  },
  {
    name: 'David Williams',
    role: 'Business Owner',
    image: '/api/placeholder/100/100',
    content: 'Quick response for emergency electrical work. Highly professional and fair pricing.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from happy homeowners
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-100" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}