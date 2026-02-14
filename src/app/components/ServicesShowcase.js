// components/ServicesShowcase.js
"use client"
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { 
  Wrench, 
  Droplet, 
  Sparkles, 
  Flower2, 
  Paintbrush, 
  Shirt, 
  WashingMachine,
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: <Droplet className="w-8 h-8" />,
    title: 'Plumbing',
    description: 'Expert plumbing services for leaks, installations, and repairs',
    image: 'https://cdn.pixabay.com/photo/2025/05/10/10/38/plumber-9590954_1280.png',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Electrical',
    description: 'Professional electrical work for your home safety',
    image: 'https://media.istockphoto.com/id/1463961479/vector/isometric-electric-switchboard-transformer-distribution-board-electrical-technician-doing.jpg?s=2048x2048&w=is&k=20&c=Z0vLxLPWnx_0SoD64R-fp_ijAhCC7b2PkSggL0efOXQ=',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Dry Cleaning',
    description: 'Premium fabric care and dry cleaning services',
    image: 'https://media.istockphoto.com/id/1293206204/vector/female-maid-help-man-to-put-clothes-into-washing-machine.jpg?s=2048x2048&w=is&k=20&c=O8CTYvHcGIPq4wiVcKxVcDB0eyYJyZ7bk6TDoGErQJA=',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: 'Gardening',
    description: 'Complete garden maintenance and landscaping',
    image: 'https://media.istockphoto.com/id/450651847/vector/gardening-pattern.jpg?s=1024x1024&w=is&k=20&c=xkQnoR1zkhpXIntPN85Y2y1Fa2S6sCvTWzlwmtWLtU8=',
    
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: 'Home Decor',
    description: 'Transform your space with expert decorators',
    image: 'https://cdn.pixabay.com/photo/2023/04/20/06/31/living-room-7939062_1280.png',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: <WashingMachine className="w-8 h-8" />,
    title: 'Washer Repair',
    description: 'Quick and reliable washing machine repairs',
    image: 'https://cdn.pixabay.com/photo/2025/04/23/18/58/ai-generated-9553696_1280.png',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Handyman',
    description: 'Skilled workers for all your home maintenance',
    image: 'https://cdn.pixabay.com/photo/2025/06/27/18/13/plumber-9684296_1280.png',
    color: 'from-gray-500 to-slate-500'
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: 'Laundry',
    description: 'Professional washing and ironing services',
    image: 'https://cdn.pixabay.com/photo/2026/01/26/11/47/ironing-clothes-illustration-10088901_1280.png',
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function ServicesShowcase() {
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
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional solutions for every corner of your home
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                  <div className={`text-${service.color.split('-')[1]}-600`}>
                    {service.icon}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}