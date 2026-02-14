// components/Hero.js
"use client"
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Star, 
  Clock, 
  Shield,
  Users,
  Award,
  ChevronRight,
  Phone,
  Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  
  const anandServices = [
    "Plumbing Services in Anand",
    "Electrical Work in Anand",
    "Gardening in Anand",
    "Home Cleaning in Anand",
    "Dry Cleaning in Anand",
    "Home Decor in Anand"
  ];

  const localStats = [
    { icon: <Users />, value: "5000+", label: "Happy Anand Clients" },
    { icon: <Star />, value: "4.9", label: "Rating in Anand" },
    { icon: <Clock />, value: "30 min", label: "Average Response" },
    { icon: <Shield />, value: "100%", label: "Local Trust" }
  ];

  const anandLocalities = [
    "Gandhi Road", "GIDC", "Vallabh Vidyanagar", "New Anand", "Borsad Road"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % anandServices.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern with Anand-specific gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        {/* Anand City Silhouette Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
      </div>

      {/* Animated Circles with Anand colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Anand City Badge - Floating */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-32 right-10 z-20 hidden lg:block"
      >
        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-emerald-200">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-gray-800">Serving Anand Since 2015</span>
            <div className="flex items-center ml-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Anand-Specific Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-6"
            >
              <MapPin className="w-4 h-4" />
              <span>Anand's Most Trusted Home Services</span>
            </motion.div>

            {/* Dynamic Service Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="h-12 mb-2"
            >
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-emerald-600 font-semibold text-lg"
              >
                {anandServices[currentService]}
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Professional Home Services{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  in Anand
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 mb-8"
            >
              From Gandhi Road to GIDC, Vallabh Vidyanagar to New Anand – we bring expert home services right to your doorstep across the city.
            </motion.p>

            {/* Localities Quick Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {anandLocalities.map((locality, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full text-sm text-emerald-700"
                >
                  {locality}
                </span>
              ))}
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm">
                + More
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Service in Anand
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Anand Office
              </button>
            </motion.div>

            {/* Trust Badges with Local Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold text-sm"
                    >
                      {['RJ', 'PK', 'AM', 'SD'][i-1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">Trusted by 5,000+ Anand families</p>
                </div>
              </div>

              {/* Local Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {localStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-emerald-600 w-6 h-6 mx-auto mb-1">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-gray-800">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              {/* Main Image with Anand Landmark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2025/10/13/14/41/plumber-9892231_1280.png"
                  alt="Home Services in Anand"
                  className="w-full h-full object-cover"
                />
                {/* Anand Watermark */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-emerald-600">ANAND</span>
                </div>
              </div>
              
              {/* Floating Cards - Anand Specific */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -left-8 top-20 bg-white p-4 rounded-xl shadow-xl border-l-4 border-emerald-500"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                    🚰
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Plumbing</p>
                    <p className="text-sm text-gray-500">In all Anand areas</p>
                    <div className="flex items-center mt-1 text-xs text-emerald-600">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>30 min response</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -right-8 bottom-20 bg-white p-4 rounded-xl shadow-xl border-l-4 border-teal-500"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">
                    🌿
                  </div>
                  <div>
                    <p className="font-semibold">Gardeners</p>
                    <p className="text-sm text-gray-500">Vallabh Vidyanagar</p>
                    <div className="flex items-center mt-1 text-xs text-teal-600">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      <span>4.9 ★ (200+ reviews)</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Anand City Recognition Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="font-medium text-sm">Anand's Best Service Provider 2024</span>
                </div>
              </motion.div>
            </div>

            {/* Local Service Provider Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-12 left-0 right-0 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 mx-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    👥
                  </div>
                  <div>
                    <p className="text-sm font-medium">Local Anand Professionals</p>
                    <p className="text-xs text-gray-500">50+ verified experts</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <p className="text-sm font-medium">5 Years in Anand</p>
                    <p className="text-xs text-gray-500">Serving locally since 2019</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  View all <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Anand City Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 mb-1">Serving Anand & Nearby Areas</span>
        <MapPin className="w-4 h-4 text-emerald-600" />
      </motion.div>
    </section>
  );
}