// pages/services.js
"use client"
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Shield, 
  ChevronDown,
  Wrench,
  Droplet,
  Zap,
  Sparkles,
  Flower2,
  Paintbrush,
  Shirt,
  WashingMachine,
  Hammer,
  Wind,
  Truck,
  Scissors,
  Home,
  Tool,
  Users,
  ThumbsUp,
  Phone,
  Calendar,
  ArrowRight,
  X
} from 'lucide-react';

const allServices = [
  { 
    id: 1,
    category: 'Plumbing', 
    icon: <Droplet className="w-6 h-6" />,
    iconBg: 'from-blue-500 to-cyan-500',
    count: 12, 
    image: 'https://cdn.pixabay.com/photo/2025/05/10/10/38/plumber-9590954_1280.png',
    rating: 4.9,
    reviews: 1250,
    responseTime: '30 min',
    price: '₹299 onwards',
    description: 'Expert plumbing services for leaks, installations, and repairs',
    features: ['24/7 Emergency', 'Licensed Plumbers', 'Warranty Available'],
    professionals: ['Rajesh Patel', 'Amit Shah', 'Priya Desai'],
    areas: ['Gandhi Road', 'GIDC', 'Vallabh Vidyanagar']
  },
  { 
    id: 2,
    category: 'Electrical', 
    icon: <Zap className="w-6 h-6" />,
    iconBg: 'from-yellow-500 to-orange-500',
    count: 8, 
    image: 'https://media.istockphoto.com/id/1463961479/vector/isometric-electric-switchboard-transformer-distribution-board-electrical-technician-doing.jpg?s=2048x2048&w=is&k=20&c=Z0vLxLPWnx_0SoD64R-fp_ijAhCC7b2PkSggL0efOXQ=',
    rating: 4.8,
    reviews: 980,
    responseTime: '45 min',
    price: '₹349 onwards',
    description: 'Professional electrical work for your home safety',
    features: ['Licensed Electricians', 'Safety Certified', 'Emergency Service'],
    professionals: ['Kiran Kumar', 'Suresh Yadav', 'Meera Singh'],
    areas: ['New Anand', 'Borsad Road', 'Vidyanagar']
  },
  { 
    id: 3,
    category: 'Dry Cleaning', 
    icon: <Shirt className="w-6 h-6" />,
    iconBg: 'from-purple-500 to-pink-500',
    count: 6, 
    image: 'https://media.istockphoto.com/id/1293206204/vector/female-maid-help-man-to-put-clothes-into-washing-machine.jpg?s=2048x2048&w=is&k=20&c=O8CTYvHcGIPq4wiVcKxVcDB0eyYJyZ7bk6TDoGErQJA=',
    rating: 4.7,
    reviews: 750,
    responseTime: '24 hours',
    price: '₹99 onwards',
    description: 'Premium fabric care and dry cleaning services',
    features: ['Free Pickup', 'Same Day Delivery', 'Eco-friendly'],
    professionals: ['Pooja Sharma', 'Rajni Patel', 'Anita Desai'],
    areas: ['Gandhi Road', 'GIDC', 'New Anand']
  },
  { 
    id: 4,
    category: 'Gardening', 
    icon: <Flower2 className="w-6 h-6" />,
    iconBg: 'from-green-500 to-emerald-500',
    count: 10, 
    image: 'https://media.istockphoto.com/id/450651847/vector/gardening-pattern.jpg?s=1024x1024&w=is&k=20&c=xkQnoR1zkhpXIntPN85Y2y1Fa2S6sCvTWzlwmtWLtU8=',
    rating: 4.9,
    reviews: 890,
    responseTime: '60 min',
    price: '₹399 onwards',
    description: 'Complete garden maintenance and landscaping',
    features: ['Expert Gardeners', 'Organic Products', 'Monthly Plans'],
    professionals: ['Hari Ram', 'Mohan Lal', 'Geeta Verma'],
    areas: ['Vallabh Vidyanagar', 'New Anand', 'Borsad Road']
  },
  { 
    id: 5,
    category: 'Home Decor', 
    icon: <Paintbrush className="w-6 h-6" />,
    iconBg: 'from-pink-500 to-rose-500',
    count: 7, 
    image: 'https://cdn.pixabay.com/photo/2023/04/20/06/31/living-room-7939062_1280.png',
    rating: 4.8,
    reviews: 620,
    responseTime: '2 hours',
    price: '₹999 onwards',
    description: 'Transform your space with expert decorators',
    features: ['Interior Experts', 'Custom Designs', 'Free Consultation'],
    professionals: ['Neha Gupta', 'Vikram Mehta', 'Ritu Sharma'],
    areas: ['Vidyanagar', 'New Anand', 'Gandhi Road']
  },
  { 
    id: 6,
    category: 'Washer Repair', 
    icon: <WashingMachine className="w-6 h-6" />,
    iconBg: 'from-indigo-500 to-blue-500',
    count: 5, 
    image: 'https://cdn.pixabay.com/photo/2025/04/23/18/58/ai-generated-9553696_1280.png',
    rating: 4.8,
    reviews: 450,
    responseTime: '90 min',
    price: '₹299 onwards',
    description: 'Quick and reliable washing machine repairs',
    features: ['Brand Certified', 'Genuine Parts', 'Service Warranty'],
    professionals: ['Ramesh Patel', 'Sunil Kumar', 'Ajay Singh'],
    areas: ['GIDC', 'New Anand', 'Borsad Road']
  },
  { 
    id: 7,
    category: 'Handyman', 
    icon: <Wrench className="w-6 h-6" />,
    iconBg: 'from-gray-500 to-slate-500',
    count: 15, 
    image: 'https://cdn.pixabay.com/photo/2025/06/27/18/13/plumber-9684296_1280.png',
    rating: 4.9,
    reviews: 1560,
    responseTime: '45 min',
    price: '₹249 onwards',
    description: 'Skilled workers for all your home maintenance',
    features: ['Multi-skilled', 'Same Day Service', 'Fixed Pricing'],
    professionals: ['Dinesh Yadav', 'Manoj Sharma', 'Prakash Rao'],
    areas: ['All Anand Areas', 'Vidyanagar', 'GIDC']
  },
  { 
    id: 8,
    category: 'Cleaning', 
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: 'from-teal-500 to-cyan-500',
    count: 9, 
    image: 'https://cdn.pixabay.com/photo/2026/01/26/11/47/ironing-clothes-illustration-10088901_1280.png',
    rating: 4.8,
    reviews: 1120,
    responseTime: '60 min',
    price: '₹199 onwards',
    description: 'Professional home cleaning and sanitization',
    features: ['Deep Cleaning', 'Eco-friendly', 'Insured Staff'],
    professionals: ['Lakshmi Devi', 'Kavita Shah', 'Rekha Singh'],
    areas: ['Gandhi Road', 'New Anand', 'Vidyanagar']
  },
  { 
    id: 9,
    category: 'Painting', 
    icon: <Paintbrush className="w-6 h-6" />,
    iconBg: 'from-orange-500 to-red-500',
    count: 8, 
    image: 'https://cdn.pixabay.com/photo/2017/08/10/07/32/painting-2618847_1280.jpg',
    rating: 4.7,
    reviews: 890,
    responseTime: '3 hours',
    price: '₹499 onwards',
    description: 'Professional painting services for homes',
    features: ['Color Consultation', 'Premium Paints', 'Clean Finish'],
    professionals: ['Arun Kumar', 'Vijay Patil', 'Sanjay Gupta'],
    areas: ['Vidyanagar', 'New Anand', 'Borsad Road']
  },
  { 
    id: 10,
    category: 'Carpentry', 
    icon: <Hammer className="w-6 h-6" />,
    iconBg: 'from-amber-500 to-yellow-500',
    count: 6, 
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/carpenter-1867183_1280.jpg',
    rating: 4.8,
    reviews: 560,
    responseTime: '2 hours',
    price: '₹399 onwards',
    description: 'Expert carpentry and furniture work',
    features: ['Custom Furniture', 'Repairs', 'Polish Work'],
    professionals: ['Kanti Bhai', 'Ramesh Suthar', 'Rajesh Kumar'],
    areas: ['GIDC', 'New Anand', 'Gandhi Road']
  },
  { 
    id: 11,
    category: 'HVAC', 
    icon: <Wind className="w-6 h-6" />,
    iconBg: 'from-cyan-500 to-blue-500',
    count: 7, 
    image: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/air-conditioner-2538293_1280.jpg',
    rating: 4.8,
    reviews: 430,
    responseTime: '90 min',
    price: '₹449 onwards',
    description: 'AC and heating system services',
    features: ['Gas Refilling', 'Maintenance', 'Installation'],
    professionals: ['Suresh Mehta', 'Ravi Sharma', 'Amit Patel'],
    areas: ['Vidyanagar', 'New Anand', 'All Areas']
  },
  { 
    id: 12,
    category: 'Moving', 
    icon: <Truck className="w-6 h-6" />,
    iconBg: 'from-violet-500 to-purple-500',
    count: 4, 
    image: 'https://cdn.pixabay.com/photo/2016/11/29/05/08/moving-1867287_1280.jpg',
    rating: 4.6,
    reviews: 320,
    responseTime: 'Same Day',
    price: '₹999 onwards',
    description: 'Professional moving and packing services',
    features: ['Packing Materials', 'Insurance', 'Labor Support'],
    professionals: ['Moving Team A', 'Moving Team B', 'Packing Experts'],
    areas: ['All Anand', 'Vidyanagar', 'GIDC']
  },
];

const categories = ['All', 'Plumbing', 'Electrical', 'Cleaning', 'Gardening', 'Repairs', 'Maintenance'];
const sortOptions = ['Popular', 'Rating', 'Price: Low to High', 'Price: High to Low'];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('Popular');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState(null);

  const filteredServices = allServices
    .filter(service => 
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || service.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === 'Rating') return b.rating - a.rating;
      if (sortBy === 'Price: Low to High') return parseInt(a.price) - parseInt(b.price);
      if (sortBy === 'Price: High to Low') return parseInt(b.price) - parseInt(a.price);
      return 0;
    });

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container-padding mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-4">
              <Home className="w-4 h-4" />
              <span>Services Available in Anand</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional home services delivered right to your doorstep in Anand
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for plumbing, cleaning, gardening..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition font-medium"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Category Filter */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                          <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                              <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                  selectedCategory === cat
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Price Range */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full"
                          />
                        </div>

                        {/* Availability */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded text-emerald-600" />
                              <span className="text-sm text-gray-600">24/7 Emergency</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" className="rounded text-emerald-600" />
                              <span className="text-sm text-gray-600">Same Day</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center mb-6"
          >
            <p className="text-gray-600">
              <span className="font-semibold text-emerald-600">{filteredServices.length}</span> services available in Anand
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Showing results for Anand, Gujarat</span>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Service Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {service.icon}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>

                  {/* Service Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{service.category}</h3>
                    <p className="text-sm opacity-90">{service.count}+ Professionals</p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                  
                  {/* Quick Info */}
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{service.reviews}+ reviews</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">{service.price}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedServiceForBooking(service);
                        setShowBookingModal(true);
                      }}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition shadow-lg hover:shadow-xl border-2 border-emerald-600">
                Load More Services
              </button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedService.image}
                  alt={selectedService.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${selectedService.iconBg} rounded-2xl items-center justify-center mb-4`}>
                    {selectedService.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{selectedService.category}</h2>
                  <p className="text-lg opacity-90">{selectedService.description}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <div className="text-emerald-600 font-bold text-xl">{selectedService.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <div className="text-emerald-600 font-bold text-xl">{selectedService.reviews}+</div>
                    <div className="text-xs text-gray-600">Reviews</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <div className="text-emerald-600 font-bold text-xl">{selectedService.count}</div>
                    <div className="text-xs text-gray-600">Professionals</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <div className="text-emerald-600 font-bold text-xl">{selectedService.responseTime}</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Service Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Professionals */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Top Professionals in Anand</h3>
                  <div className="space-y-3">
                    {selectedService.professionals.map((pro, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                            {pro.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{pro}</p>
                            <p className="text-xs text-gray-500">5+ years experience</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">4.9</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Service Areas in Anand</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.areas.map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </button>
                  <button className="flex-1 border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && selectedServiceForBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Book {selectedServiceForBooking.category}</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Your Address in Anand"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Select Date</option>
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This Week</option>
                </select>
                <textarea
                  placeholder="Additional Details"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition">
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}